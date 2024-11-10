// Disable F12 and other common developer tool keys
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Open DevTools
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Open Console
        (e.ctrlKey && e.key === 'U') || // View Page Source
        (e.ctrlKey && e.key === 'S') // Save Page
    ) {
        e.preventDefault();
        alert("ไม่สามารถดูโค้ดได้");
    }

    // Show "สวัสดี" when F1 is pressed
    if (e.key === 'F1') {
        e.preventDefault(); // Prevent the default F1 action (usually opens help)
        alert("สวัสดี แต่อย่ากด F อื่น");
    }
    if (e.key === 'F2') {
        e.preventDefault(); // Prevent the default F1 action (usually opens help)
        alert("กดทำไม");
    }
    if (e.key === 'F3') {
        e.preventDefault(); // Prevent the default F1 action (usually opens help)
        alert("ก็บอกว่าอย่ากดไง");
    }
    if (e.key === 'F4') {
        e.preventDefault(); // Prevent the default F1 action (usually opens help)
        alert("พูดไม่รู้เรื่องหรอ");
    }
    if (e.key === 'F5') {
        e.preventDefault(); // Prevent the default F1 action (usually opens help)
        alert("จะหน้าเว็ปทำไม");
    }
});
        // เข้าถึงปุ่มและวิดีโอ
const video = document.getElementById('myVideo');
const muteButton = document.getElementById('muteButton');

// ฟังก์ชันสำหรับเปิด/ปิดเสียง
muteButton.addEventListener('click', function() {
    // ถ้าปิดเสียงอยู่ จะเปิดเสียง
            if (video.muted) {
                video.muted = false;
                muteButton.textContent = 'Mute'; // เปลี่ยนข้อความปุ่มเป็น Mute
            } else {
                video.muted = true;
                muteButton.textContent = 'Unmute'; // เปลี่ยนข้อความปุ่มเป็น Unmute
            }
        });
