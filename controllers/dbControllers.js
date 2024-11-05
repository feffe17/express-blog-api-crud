const db = require("../db");

exports.index = (req, res) => {

    const { tag } = req.query;

    let filteredPosts = db;
    if (tag) {
    filteredPosts = db.filter(post => post.tags.includes(tag));
    }



    res.json({
      counter: filteredPosts.length,
      lista: filteredPosts
    });
  };

  exports.show = (req, res) => {
    const post = db.find(post => post.slug === req.params.slug);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post non trovato" });
    }
  };

  exports.store = (req, res) => {
    const { title, slug, content, tags } = req.body;
  
    if (!title || !slug || !content || !tags) {
      return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
    }

    const newPost = {
        id: db.length + 1,
        title,
        slug,
        content,
        tags
      };
    
      db.push(newPost);
      res.status(201).json(newPost);
    };