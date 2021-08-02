const router = require('../../router');
const { requireAuth } = require('../../auth/authMiddleware');

router.get('/dashboard', requireAuth, async (req, res) => {
  res.send("dashboard content (you can see it because you're whitelisted).");
  res.end();
});
