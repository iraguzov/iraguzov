---
name: verify-site
description: Launch dev server, open site in browser via Playwright MCP, and verify changes visually
user_invocable: true
---

# Verify Site Changes

After making code changes, follow these steps to verify them:

1. **Check if dev server is running** on port 3000:
   ```bash
   lsof -i :3000
   ```
   If not running, start it in background:
   ```bash
   npm run dev &
   ```
   Wait a few seconds for the server to start.

2. **Use Playwright MCP** to open the browser and navigate to the site:
   - Navigate to `http://localhost:3000`
   - Take a screenshot of the full page
   - Check for any visual issues, broken layouts, or rendering errors

3. **Verify specific sections** if changes were made to particular components:
   - Scroll to the relevant section
   - Take screenshots to confirm the changes look correct
   - Check responsive behavior at different viewport sizes if relevant

4. **Report findings** to the user:
   - Confirm what looks correct
   - Flag any visual issues or broken elements
   - Suggest fixes if problems are found
