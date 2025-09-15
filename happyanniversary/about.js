// เลือกทุก .story
const stories = document.querySelectorAll('.story');

function checkStories() {
  const triggerBottom = window.innerHeight * 0.85;

  stories.forEach(story => {
    const storyTop = story.getBoundingClientRect().top;

    if (storyTop < triggerBottom) {
      story.style.opacity = '1';
      story.style.transform = 'translateY(0)';
    }
  });
}

// เรียกทุกครั้งที่ scroll
window.addEventListener('scroll', checkStories);

// เรียกตอนโหลดหน้า
checkStories();
