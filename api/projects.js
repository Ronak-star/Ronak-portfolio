const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const projects = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'projects.json'), 'utf-8')
    );

    const { category, id } = req.query;

    if (id) {
      const project = projects.find(p => p.id === id);
      if (!project) return res.status(404).json({ error: 'Project not found' });
      return res.status(200).json(project);
    }

    if (category && category !== 'all') {
      return res.status(200).json(projects.filter(p => p.category === category));
    }

    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Could not load projects data.' });
  }
};
