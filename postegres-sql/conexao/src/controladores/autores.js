const pool = require("../conexao");

const filaAutores = {};

filaAutores.Cadastrar = async (req, res) => {
  const { nome, idade } = req.body

  if (!nome) {
    return res.status(400).json({ mensagem: "O nome é obrigrátorio" });
  }

  try {
    const cadastrarAutor = `
      INSERT INTO autores
      (nome, idade)
      VALUES
      ($1, $2)
    `

    await pool.query(cadastrarAutor, [nome, idade]);
    const resultado = await pool.query("SELECT * FROM autores");
    const id = resultado.rowCount - 1;
    return res.status(201).json(resultado.rows[id]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro no servidor!" });
  }
};

filaAutores.obterAutor = async (req, res) => {
  let id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ mensagem: "por favor informe o id" });
  }

  try {
    const busca_autor = "SELECT * FROM autores WHERE id = $1";

    const existe_autor = await pool.query(busca_autor, [id]);

    if (existe_autor.rowCount === 0) {
      return res.status(404).json({ mensagem: "Autor não encontrado" });
    }

    const autor = existe_autor.rows[0];

    const query = `
      SELECT l.ident, l.nome, l.genero, l.editora, l.data_publicacao 
      FROM livros
      l left join autores au on l.autor_id = au.id 
      WHERE au.id = $1
    `;

    const dados = await pool.query(query, [id]);

    if (dados.rowCount === 0) {
      return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    const resultado = {
      id: autor.id,
      nome: autor.nome,
      idade: autor.idade,
      livros: dados.rows,
    };

    return res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor." });
  }
};

filaAutores.cadastrarLivro = async (req, res) => {
  const { nome, genero, editora, data_publicacao } = req.body;
  const autor_id = Number(req.params.id);

  if (!nome) {
    res.status(400).json({ mensagem: "o campo nome é obrigatório." });
  }

  try {
    const query = `
      INSERT INTO livros
      (nome, genero, editora, data_publicacao, autor_id)
      VALUES
      ($1, $2, $3, $4, $5)
    `;
    const params = [nome, genero, editora, data_publicacao, autor_id];

    await pool.query(query, params);
    const resultado = await pool.query("SELECT * FROM livros");
    const id = resultado.rowCount - 1;
    return res.status(201).json(resultado.rows[id]);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro no servidor." });
  }
};

filaAutores.obterLivros = async (req, res) => {
  try {
    const query = `
      SELECT l.ident, l.nome, l.genero, l.editora, l.data_publicacao, au as autor
      FROM livros l 
      join autores au on l.autor_id = au.id;
    `;

    const consulta = await pool.query(query);
    let resultado = [...consulta.rows];
    for (let i = 0; i < consulta.rowCount; i++) {
      const dados = resultado[i].autor;
      const dados_autor = dados.slice(1, -1);
      const array = dados_autor.split(",");
      const autor = {
        id: array[0],
        nome: array[1],
        idade: array[2],
      };

      resultado[i].autor = autor;
    }

    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mensagem: "Erro no servidor." });
  }
};

module.exports = filaAutores;
