const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async store(req, res) {
    const { author, place, description, hashtags } = req.body;

    const { filename: image } = req.file;
    const [name] = image.split(".");
    const filename = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resize", filename));

    fs.unlinkSync(req.file.path);

    const post = await new Post.create({
      author,
      place,
      description,
      hashtags,
      image: {
        filename,
      },
    });
    req.io.emit("post", post);

    return res.json(post);
  },
};
