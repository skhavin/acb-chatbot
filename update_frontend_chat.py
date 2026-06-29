import os

with open(os.path.join("cloned-site", "index.html"), "r", encoding="utf-8") as f:
    content = f.read()

old_handle_query = '''        async function handleQuery(text) {
            const lowerText = text.toLowerCase();
            
            // Check complaint status
            if (lowerText.includes('status') || lowerText.includes('check')) {
                const match = text.match(/\\d+/);
                if (match) {
                    const complaintId = match[0];
                    try {
                        const response = await fetch(`http://localhost:8000/api/complaints/${complaintId}`);
                        if (response.ok) {
                            const complaint = await response.json();
                            addMessage(`Complaint #${complaint.id}: Status - ${complaint.status}, Registered on ${complaint.complaint_date}`, 'bot');
                        } else {
                            addMessage('Complaint not found. Please check the ID.', 'bot');
                        }
                    } catch (e) {
                        addMessage('Error checking status. Please try again.', 'bot');
                    }
                    return;
                }
                addMessage('Please provide your complaint ID to check status.', 'bot');
                return;
            }
            
            // Register complaint
            if (lowerText.includes('register') || lowerText.includes('complaint')) {
                addMessage('Please enter your name, email (optional), phone (optional), and complaint details.', 'bot');
                return;
            }
            
            // Simple registration flow (for demo)
            addMessage('I understand. For now, please use the chat to interact. You can also use Mithra, our voice assistant!', 'bot');
        }'''

new_handle_query = '''        async function handleQuery(text) {
            try {
                const response = await fetch('http://localhost:8000/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text })
                });
                const data = await response.json();
                addMessage(data.response, 'bot');
            } catch (e) {
                addMessage('Sorry, there was an error processing your request.', 'bot');
            }
        }'''

new_content = content.replace(old_handle_query, new_handle_query)

with open(os.path.join("cloned-site", "index.html"), "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated frontend to use /api/chat endpoint!")
