const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'profile.json'), 'utf-8')
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Could not load profile data.' });
  }
};
