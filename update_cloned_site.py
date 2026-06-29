import os

with open(os.path.join("cloned-site", "index.html"), "r", encoding="utf-8") as f:
    content = f.read()

# Find where to insert CSS link (after existing styles)
head_end = '</head>'
css_link = '    <link rel="stylesheet" href="chatbot.css">\n'
content = content.replace(head_end, css_link + head_end)

# Find where to insert the chatbot/VA HTML and JS link
# First, let's remove the old inline styles and JS
# Let's find the start of our injected content
old_injection_start = '    <!-- Chatbot & Voice Assistant Styles -->'
old_injection_end = '    </script>'

# Extract everything from old_injection_start to old_injection_end + </body>
start_idx = content.find(old_injection_start)
if start_idx == -1:
    print("Could not find old injection, trying a different approach")
else:
    # Let's remove everything from start_idx to </body>
    body_end_idx = content.find('</body>', start_idx)
    if body_end_idx == -1:
        print("Could not find </body>")
    else:
        # Keep everything up to start_idx
        content = content[:start_idx]
        # Now add new HTML elements, then link to chatbot.js, then </body>
        new_html = '''    <!-- Voice Assistant Button -->
    <button class="voice-btn" id="voiceBtn" title="Mithra - Voice Assistant">🎤</button>
    
    <!-- Chatbot Button & Window -->
    <button class="chatbot-btn" id="chatbotBtn" title="Chat Assistant">💬</button>
    
    <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
            <h3>ACB Chat Assistant</h3>
            <button id="closeChat" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.25rem;">✕</button>
        </div>
        <div class="chatbot-messages" id="chatMessages">
            <div class="message bot">Hello! How can I help you today? You can register a complaint or check status.</div>
        </div>
        <div class="chatbot-input">
            <input type="text" id="chatInput" placeholder="Type your message...">
            <button id="sendBtn">Send</button>
        </div>
    </div>
    
    <script src="chatbot.js"></script>
</body>'''
        content = content + new_html

with open(os.path.join("cloned-site", "index.html"), "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated cloned site to use separate CSS and JS files!")
