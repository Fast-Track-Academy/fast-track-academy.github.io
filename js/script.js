// Basic JavaScript for the Fast Track Academy website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple mobile menu toggle (placeholder for future enhancement)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('show');
        });
    }
    
    // Add some interactive feedback
    console.log('Fast Track Academy website loaded successfully!');
    
    // Virtual Classroom functionality
    initVirtualClassroom();
});

function initVirtualClassroom() {
    const classroomDoor = document.getElementById('classroomDoor');
    const classroomContent = document.getElementById('classroomContent');
    const doorStatus = document.querySelector('.door-status');
    
    if (!classroomDoor || !classroomContent) return;
    
    let isClassroomOpen = false;
    
    // Simulate loading and preparing the classroom
    setTimeout(() => {
        doorStatus.textContent = '🟢 Ready to Enter!';
        doorStatus.style.color = '#90EE90';
    }, 2000);
    
    // Door click event
    classroomDoor.addEventListener('click', function() {
        if (!isClassroomOpen) {
            enterClassroom();
        } else {
            exitClassroom();
        }
    });
    
    function enterClassroom() {
        // Update door status
        doorStatus.textContent = '🟡 Entering...';
        doorStatus.style.color = '#FFD700';
        
        // Animate door opening
        classroomDoor.style.transform = 'rotateY(-15deg) scale(0.95)';
        classroomDoor.style.opacity = '0.7';
        
        setTimeout(() => {
            // Hide door and show classroom content
            classroomDoor.style.display = 'none';
            classroomContent.style.display = 'block';
            
            // Update door text for exit
            classroomDoor.querySelector('h3').textContent = 'Click to Exit Classroom';
            doorStatus.textContent = '🚪 Exit Classroom';
            doorStatus.style.color = '#FF6B6B';
            
            isClassroomOpen = true;
            
            // Start live dashboard animations
            startLiveDashboard();
            
            // Show welcome message
            showWelcomeMessage();
        }, 800);
    }
    
    function exitClassroom() {
        classroomContent.style.display = 'none';
        classroomDoor.style.display = 'inline-block';
        classroomDoor.style.transform = 'rotateY(0deg) scale(1)';
        classroomDoor.style.opacity = '1';
        
        // Reset door text
        classroomDoor.querySelector('h3').textContent = 'Click to Enter Classroom';
        doorStatus.textContent = '🟢 Ready to Enter!';
        doorStatus.style.color = '#90EE90';
        
        isClassroomOpen = false;
    }
    
    function startLiveDashboard() {
        // Animate numbers counting up
        animateNumber('studentsOnline', 127, 2000);
        animateNumber('liveSessions', 2, 1000);
        animateNumber('completedToday', 43, 1500);
        
        // Update stats periodically to simulate live environment
        setInterval(() => {
            updateLiveStats();
        }, 15000); // Update every 15 seconds
    }
    
    function animateNumber(elementId, target, duration) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        let start = 0;
        const increment = target / (duration / 50);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 50);
    }
    
    function updateLiveStats() {
        // Simulate changing numbers to show live activity
        const studentsElement = document.getElementById('studentsOnline');
        const completedElement = document.getElementById('completedToday');
        
        if (studentsElement) {
            const currentStudents = parseInt(studentsElement.textContent);
            const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
            const newCount = Math.max(100, currentStudents + change);
            studentsElement.textContent = newCount;
        }
        
        if (completedElement) {
            const currentCompleted = parseInt(completedElement.textContent);
            const newCompleted = currentCompleted + Math.floor(Math.random() * 3);
            completedElement.textContent = newCompleted;
        }
    }
    
    function showWelcomeMessage() {
        // Create and show a welcome overlay
        const welcomeOverlay = document.createElement('div');
        welcomeOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;
        
        welcomeOverlay.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 3rem;
                border-radius: 20px;
                text-align: center;
                color: white;
                max-width: 500px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            ">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">🎉 Welcome to Virtual Classroom!</h2>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">Experience the future of hybrid learning with real-time interaction and exciting features!</p>
                <button id="closeWelcome" style="
                    background: linear-gradient(135deg, #FF6B6B, #FF8E53);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 25px;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">Start Learning! 🚀</button>
            </div>
        `;
        
        document.body.appendChild(welcomeOverlay);
        
        // Fade in the overlay
        setTimeout(() => {
            welcomeOverlay.style.opacity = '1';
        }, 100);
        
        // Close welcome message
        document.getElementById('closeWelcome').addEventListener('click', () => {
            welcomeOverlay.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(welcomeOverlay);
            }, 500);
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(welcomeOverlay)) {
                welcomeOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(welcomeOverlay)) {
                        document.body.removeChild(welcomeOverlay);
                    }
                }, 500);
            }
        }, 5000);
    }
    
    // Add click handlers for join buttons
    const joinButtons = document.querySelectorAll('.join-btn');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sessionSubject = this.parentElement.querySelector('.session-subject').textContent;
            alert(`🎬 Joining ${sessionSubject} session! This would normally open the live classroom interface.`);
        });
    });
}