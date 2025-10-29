// HTML 문서가 준비되면 실행
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 필요한 요소들 가져오기.
  const params = new URLSearchParams(window.location.search);
  const suspectId = params.get('suspect'); 

  const endingContainer = document.querySelector('.ending-container');
  const overlayImage = document.querySelector('.overlay-image');
  const clickPrompt = document.querySelector('.click-prompt');
  const finalStory = document.querySelector('.final-story');
  const storyContent = document.getElementById('story-content');
  const finalTitleImage = document.querySelector('.final-title-image');
  const finalStampImage = document.querySelector('.final-stamp-image'); // 도장 추가

  // 2. 텍스트 배열
  const storyTextsFromUser = [
    // 0번 (Phase 1 - HTML 초기 내용)
    "하지고등학교 2학년 야구부 주전투수인 신투수.",
    // 1번 (Phase 2)
    "1년 전 고등학교 입학 후 운동장을 지나가던 박수아에게 한눈에 반해<br>고백한 후 1년간 교제하며 하지고등학교 공식커플로써 알콩달콩 학교<br>생활을 이어가고 있었다.",
    // 2번 (Phase 3)
    "3개월 전, 박수아의 소꿉친구인 김여운이<br>야구부의 매니저로 들어오게 된다.",
    // 3번 (Phase 4)
    "자신을 챙겨주는 모습과 건강하고 유쾌한 그녀에게 호감을 느끼기<br>시작했고, 이후 단 둘이 저녁을 먹자는 등의 약속을 잡아보려 하였으나",
    // 4번 (Phase 5)
    "김여운은 신투수가 소꿉친구의 남자임을 알기에 거절한다.",
    // 5번 (Phase 6)
    "그럼에도 계속해서 자신에게 호감을 표시하는 신투수에<br>김여운도 흔들리고 있었다.",
    // 6번 (Phase 7)
    "하지만 사랑보다 우정이 먼저였던 김여운.",
    // 7번 (Phase 8)
    "확실하게 거절하기 위해 단 둘의 저녁 약속을 수락한 후<br>진지한 대화를 통해 거절하기로 한다.",
    // 8번 (Phase 9)
    "저녁 약속 당일, 김여운은 밥을 먹으며<br>신투수에게 확실한 거절 의사를 표한다.",
    // 9번 (Phase 10)
    "신투수도 수긍하는 듯 했지만 함께 기숙사쪽으로 돌아오는 길에<br>신투수는 김여운에게 갑작스러운 입맞춤을 하는데…",
    //10
    "김여운은 순간적으로 거절하지 못한다.",
    //11
    "잠시 후 김여운은 정신을 차리고<br>신투수를 밀쳐낸 채 방으로 가버린다.",
    //12
    "하지만 신투수가 예상하지 못한 일이 기다리고 있었는데…",
    //13
    "하지고등학교 2학년 전교 1등을 단 한번도 놓친 적 없는 장일등.",
    //14
    "야간자율학습을 끝내고 기숙사방으로 돌아오는 길에<br>신투수와 김여운의 비밀스런 만남을 목격한다.",
    //15
    "반사적으로 그 모습을 촬영한 장일등은 자신의 방으로 돌아오는데",
    //16
    "이 사진으로 최근 성적이 급속도로 올라 자신과 근소한 차이로 지난<br>중간고사에서 전교 2등을 차지한 박수아의 멘탈을 흔들어 놓기로 한다.",
    //17
    "장일등은 인스타그램 디엠으로<br>박수아에게 신투수와 김여운의 사진을 보내는데",
    //18
    "이후 장일등은 삭제 기능으로 자신이 보낸 디엠을 삭제한다.",
    //19
    "하지고등학교 공식커플로 1년간 교제해온 신투수의 바람,",
    //20
    "그것도 자신의 친구인 김여운과 바람을 피며<br>자신의 앞에서는 너만 사랑한다고 말하던 신투수.",
    //21
    "더불어 다른 사람도 아니고 어릴 적부터 친하게 지낸 소꿉친구<br>김여운이 자신의 남자친구와 바람을 폈다는 사실에",
    //22
    "끓어오르는 분노와 배신감을 뒤로 하고 두사람에게 복수를 결심한다.",
    //23
    "박수아는 평소 기숙사 복도나 방에서 인기척이 느껴진다며,<br>요즘 자신을 따라다니는 나토커가 의심된다, 무섭다는 말과 함께",
    //24
    "평소 힘이 세고 겁이 없는 성격의 김여운에게<br>하루만 방을 바꿔 확인해 달라고 부탁한다.",
    //25
    "그리고 자신이 김여운인 척 신투수에게 쪽지를 보내",
    //26
    "김여운의 방에 들어온 신투수를 전날 몰래 사가지고 온 칼로<br>기습 공격해 살해하고 김여운에게 뒤집어 씌울 계획을 세운다.",
    //27
    "사건 당일, 중요한 경기를 앞두고 10시까지 야구부 연습을 하다<br>방으로 돌아온 신투수. 방문 틈에 낀 쪽지 한장을 발견한다.",
    //28
    "쪽지를 확인한 투수는 기대감은 안은 채<br>2시에 맞춰 김여운의 방인 401호로 향한다.",
    //29
    "401호에 들어온 신투수. 살짝 열려있는 문을 열고 들어가<br>김여운을 찾으려 두리번 거린다.",
    //30
    "이때 숨어있던 박수아가 칼로 신투수를 기습공격한다.",
    //31
    "하지만 신투수는 뛰어난 운동신경으로 방어한 후<br>박수아의 손에 들린 칼을 뺏는다.",
    //32
    "칼을 뺏기자 당황한 박수아는 화장실로 도망가 문을 잠근다.",
    //33
    "순간적으로 분노한 신투수.<br>화장실 문고리를 부수고 손에 든 칼로 박수아의 복부를 찌른다.",
    //34
    "순간 정신을 차렸으나, 곧 있을 중요 경기를 떠올리며<br>박수아를 확실하게 죽이려 여러번 난도질한다.",
    //35
    "숨이 멎은 박수아를 확인하고 방으로 돌아온 신투수는<br>자신의 옷에 튄 피와 너덜너덜해진 옷을 발견한다.",
    //36
    "신투수는 옷을 바로 벗어 사용한 칼에 감싼 채<br>매주 금요일 아침 5시에 오는 쓰레기차가 오기만을 기다린다.",
    //37
    "5시가 되자, 방 창문 밖으로 보이는 쓰레기차 위로<br>투수의 힘을 발휘하여 칼을 감싼 옷을 던져버리고,",
    //38
    "자신이 저지른 살인의 흔적이 사라지기만을 바랐다."
  ];

  // 현재 보여주는 단계를 나타내는 변수 (1부터 시작)
  let currentPhase = 1; 
  // 도장이 찍혔는지 여부를 나타내는 변수
  let isStamped = false;

  const backgroundImages = {
    kim: 'source_ending/back_04.png',
    shin: 'source_ending/back_04.png',
    jang: 'source_ending/back_04.png',
    na: 'source_ending/back_04.png',
    moon: 'source_ending/back_04.png'
  };

  const overlayImages = {
    kim: 'source_ending/ending_kim.png',
    shin: 'source_ending/ending_shin.png',
    jang: 'source_ending/ending_jang.png',
    na: 'source_ending/ending_na.png',
    moon: 'source_ending/ending_moon.png'
  };

  const backgroundUrl = backgroundImages[suspectId];
  const overlayUrl = overlayImages[suspectId];

  // 5. 이미지 설정 및 타이머 실행 
  if (backgroundUrl && overlayUrl) {
    endingContainer.style.backgroundImage = `url('${backgroundUrl}')`;
    overlayImage.src = overlayUrl;

    setTimeout(() => {
      clickPrompt.classList.add('visible');
    }, 1000); 

  } else {
    console.error('올바른 용의자 ID가 아닙니다.');
  }

  // 6. 스토리 업데이트 함수
  function updateStory(newPhase) {

    if (newPhase < 1 || newPhase > storyTextsFromUser.length + 1) {
      return;
    }

    const textIndex = newPhase - 1;

    // ----- 애니메이션 시작 -----
    storyContent.style.opacity = 0; // 텍스트 숨기기

    
    // 이전 단계로 돌아갈 때
    if (newPhase < currentPhase) {
      if (isStamped) {
        finalStampImage.classList.remove('visible');
        finalStory.classList.remove('stamped');
        isStamped = false;
      }
      // Phase 2 -> Phase 1로 돌아갈 때
      if (newPhase === 1) {
        finalTitleImage.style.opacity = 1; // 타이틀 다시 보이기
      }
    }
    // 다음 단계로 넘어갈 때
    else if (newPhase > currentPhase) {
       // Phase 1 -> Phase 2로 넘어갈 때
       if (currentPhase === 1) {
           finalTitleImage.style.opacity = 0; // 타이틀 숨기기
       }
    }
    
    // ----- 애니메이션 완료 후 실행 -----
    setTimeout(() => {
      // 배경 이미지 결정 로직 
      let newBackground = '';
      
      // 몇 번째 phase부터 어떤 이미지를 쓸지 정의
      const backgroundMap = [
        { phase: 38, image: "url('source_ending/ending_15.png')" }, // Phase 38 이상
        { phase: 36, image: "url('source_ending/ending_14.png')" }, // Phase 36 ~ 37
        { phase: 33, image: "url('source_ending/ending_13.png')" }, // Phase 33 ~ 35
        { phase: 30, image: "url('source_ending/ending_12.png')" }, // Phase 30 ~ 32
        { phase: 28, image: "url('source_ending/ending_11.png')" }, // Phase 28 ~ 29
        { phase: 26, image: "url('source_ending/ending_10.png')" }, // Phase 26 ~ 27
        { phase: 24, image: "url('source_ending/ending_09.png')" }, // Phase 24 ~ 25
        { phase: 20, image: "url('source_ending/ending_08.png')" }, // Phase 20 ~ 23
        { phase: 17, image: "url('source_ending/ending_07.png')" }, // Phase 17 ~ 19
        { phase: 14, image: "url('source_ending/ending_06.png')" }, // Phase 14 ~ 16
        { phase: 13, image: "url('source_ending/ending_05.png')" }, // Phase 13
        { phase:  9, image: "url('source_ending/ending_04.png')" }, // Phase 9 ~ 12
        { phase:  6, image: "url('source_ending/ending_03.png')" }, // Phase 6 ~ 8
        { phase:  3, image: "url('source_ending/ending_02.png')" }, // Phase 3 ~ 5
        { phase:  1, image: "url('source_ending/ending_01.png')" }  // Phase 1 ~ 2
      ];

      // 현재 phase에 맞는 배경 이미지를 찾음
      for (const mapping of backgroundMap) {
        if (newPhase >= mapping.phase) {
          newBackground = mapping.image;
          break; // 찾으면 반복 중단
        }
      }

      // 배경 이미지 변경
      if (newBackground && finalStory.style.backgroundImage !== newBackground) {
        finalStory.style.backgroundImage = newBackground;
      }

      // 텍스트 내용 교체 
      if (textIndex >= 0 && textIndex < storyTextsFromUser.length) {
          storyContent.innerHTML = storyTextsFromUser[textIndex];
          storyContent.style.opacity = 1; 
      }

      // 마지막 텍스트 다음 도장 처리
      if (newPhase === storyTextsFromUser.length + 1) {
        finalStampImage.classList.add('visible');
        finalStory.classList.add('stamped');
        isStamped = true;
        storyContent.style.opacity = 1; 
      }

    }, 400); 

    currentPhase = newPhase;
  }

  // 7. 첫 번째 화면(엔딩 이미지) 클릭 이벤트
  endingContainer.addEventListener('click', () => {

    if (finalStory.style.opacity === '0' || finalStory.style.opacity === '') {
        finalStory.style.opacity = 1;
        finalStory.style.pointerEvents = 'auto'; 
    
        setTimeout(() => {
          storyContent.style.opacity = 1;
          finalTitleImage.style.opacity = 1;
        }, 1000);
    }
  });

  // 8. 두 번째 화면(최종 전말) 클릭 이벤트
  finalStory.addEventListener('click', () => {
      // 다음 단계로 이동
      updateStory(currentPhase + 1);
  });

  // 9. 키보드 이벤트 리스너 
  document.addEventListener('keydown', (event) => {
    // final-story가 보여지고 있을 때만 작동
    if (finalStory.style.opacity === '1') {
      if (event.key === 'ArrowRight') {
        // 오른쪽 화살표: 다음 단계로
        updateStory(currentPhase + 1);
      } else if (event.key === 'ArrowLeft') {
        // 왼쪽 화살표: 이전 단계로
        updateStory(currentPhase - 1);
      }
    }
  });

});