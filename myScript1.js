window.addEventListener('load', () => {
  setTimeout(() => {
    // '.police-line' 클래스를 가진 '모든' 요소를 찾습니다.
    const policeLines = document.querySelectorAll('.police-line');
    
    // 찾은 모든 요소 각각에 'active' 클래스를 추가해줍니다.
    policeLines.forEach(line => {
      line.classList.add('active');
    });
  }, 300); // 0.3초 후 등장
});

// ENTER 버튼 애니메이션 (1초 뒤)
  setTimeout(() => {
    // 버튼의 opacity를 1로 변경해서 보이게 만듭니다.
    document.querySelector('.enter-btn').style.opacity = '1';
  }, 1500); // 1000ms = 1초