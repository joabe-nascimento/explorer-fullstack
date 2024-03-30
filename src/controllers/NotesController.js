const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body;
    const { user_id } = request.params;

    try {
      // Inicia uma transação
      await knex.transaction(async (trx) => {
        // Inserindo a nota e obtendo o ID da nota inserida
        const [note_id] = await trx("notes").insert({
          title,
          description,
          user_id,
        });

        // Inserindo os links associados à nota
        const linksInsert = links.map((link) => {
          return {
            note_id,
            url: link,
          };
        });
        await trx("links").insert(linksInsert);

        // Inserindo as tags associadas à nota
        const tagsInsert = tags.map((name) => {
          return {
            note_id,
            name,
            user_id,
          };
        });
        await trx("tags").insert(tagsInsert);
      });

      response.json({ success: true });
    } catch (error) {
      console.error("Erro ao criar nota:", error);
      response.status(500).json({ error: "Erro ao criar nota" });
    }
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    const links = await knex("links")
      .where({ note_id: id })
      .orderBy("created_at");

    return response.json({
      ...note,
      tags,
      links,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("notes").where({ id }).delete();

    return response.json();
  }
}

module.exports = NotesController;
