// HTML 문서가 모두 로드된 후 스크립트가 실행되도록 하여 안정성 확보
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // 1. 용의자 정보 모달 데이터
    // ==========================================================
    const characterData = {
        kim: { role: '용의자┃', name: '김여운', imageSrc: 'source_character/kim.png', summary: '하지고등학교 2학년 재학<br>기숙사 401호 거주<br>야구부 매니저', details: '<p>피해자 박수아와 유치원 때부터 지내온 소꿉친구. 힘이 세고 헬스를 즐겨한다. 고등학교 1학년 땐, 길거리에서 스패너질하던 남성을 제압하여 용감한 시민상을 받은 적이 있다.</p><p>발견 전날, 박수아와 저녁 6시쯤 밖에서 저녁을 함께 먹었다고 한다.최근에 박수아가 기숙사방 안에서 누군가의 시선이 느껴진다고 말한 적이 있었는데, 그날은 박수아가 자신을 좋아하고 있는 나토커가 확실하게 의심된다며, 오늘 하루만 방을 바꿔서 자달라고 했다고 한다. 김여운은 나토커가 맞는 지, 이상한 게 있는 지 본인이 확인해주겠며 흔쾌히 수락한 후 저녁 7시쯤 기숙사로 돌아와 간단한 짐만 챙긴 후 방을 바꾼 채로 있었다고 한다. 이후 방 안을 살펴보다가 별 다른 이상한 점을 발견하지 못하자 밤 11시 반쯤 잠에 들었다고 한다. 박수아와는 밤 11시까지 서로 아무 이상 없는지 확인하는 연락을 주고 받았다고 한다.</p>' },
        park: { role: '피해자┃', name: '박수아', imageSrc: 'source_character/park.png', summary: '하지고등학교 2학년 재학<br>기숙사 404호 거주', details: '<p>전교 10등 부근에 있는 학생이었으나, 최근 성적 상승으로 지난 1학기 기말고사에서 전교 2등을 했다.</p><p>김여운의 기숙사 방인 401호 방 화장실에서 쓰러진 채 발견됐다. 상체 부근에 여러 번 칼로 난도질 당한 흔적이 남아있다.</p>' },
        sin: { role: '용의자┃', name: '신투수', imageSrc: 'source_character/sin.png', summary: '하지고등학교 2학년 재학<br>기숙사 304호 거주<br>야구부 주전투수 / 좌완투수이다.', details: '<p>피해자 박수아의 남자친구로 1년간 교제중이다. 봉황대기 전국고교야구대회를 앞두고 있다.</p><p>발견 전날, 곧 있을 야구대회를 대비하여 밤 10시까지 야구연습을 하다 기숙사 304호 방으로 돌아왔다고 한다. 이후 바로 씻고, 침대에 누워 잠을 자려다가 잠이 안 와서 다시 야구연습을 하러 운동관으로 향했고, 기숙사 문이 잠기는 시간인 새벽 2시에 맞춰 다시 방으로 돌아온 후 취침했다고 한다. 박수아와는 밤 10시 야구연습이 끝난 직후에 전화를 짧게 하고는 이후로 연락하지 않았다고 한다.</p>' },
        jang: { role: '용의자┃', name: '장일등', imageSrc: 'source_character/jang.png', summary: '하지고등학교 2학년 재학<br>기숙사 408호 거주', details: '<p>전교 1등을 한 번도 놓친 적 없는 수재이다. 최근 성적이 오른 박수아를 신경쓰고 있는 듯하다.</p><p>발견 전날 밤 8시, 복도에 있는 박수아를 석식 먹고 돌아오는 길에 봤다고 한다. 이후 본인의 기숙사 방 408호에서 계속 공부하다가 밤 11시에 잠들었다고 한다. 밤귀가 예민해서 중간에 밖에서 소란스러운 소리가 나자 잠시 깼으나, 곧 잠잠해져서 별 일 아니라 생각하고 다시 잠에 들었다고 한다.</p>' },
        na: { role: '용의자┃', name: '나토커', imageSrc: 'source_character/na.png', summary: '하지고등학교 3학년 재학<br>기숙사 108호 거주', details: '<p>피해자 박수아를 짝사랑하고 있는 학생이다. 한 달 전 복도에서 넘어진 자신을 일으켜준 박수아에게 반해 자주 박수아의 반으로 찾아가 음료수를 전해주곤 했다고 한다.</p><p>발견 전날에도 낮에 박수아에게 음료수를 주었는데, 박수아가 거절했다고 한다. 이후 저녁 7시가 조금 안 된 시간, 초콜릿을 준비해서 박수아의 기숙사 방으로 향했으나, 방 안에서는 답이 없었고, 문 앞에 초콜릿 상자를 놔둔채로 본인의 기숙사 방으로 돌아왔다고 한다. 그리고 새벽 2시쯤 잠에 들었다고 한다.</p>' },
        moon: { role: '용의자┃', name: '문사감', imageSrc: 'source_character/moon.png', summary: '하지고등학교 사감선생', details: '<p>이번 학기에 하지고등학교로 발령받았다. 죽어있는 피해자를 가장 먼저 발견하고 신고한 최초발견자 및 신고자이다.</p><p>아침 6시 반에서 7시 사이, 1층부터 모든 기숙사실을 돌면서 한 번씩 문을 두드리며 깨워주는데, 403호 문이 살짝 열려있어 들어가 보았다고 한다. 피비린내가 심하게 났고, 방을 둘러보다 화장실에 난도질 당한 채 쓰러져 있는 박수아를 발견 후 바로 신고했다고 한다. 아침 6시 반에 맞춰 학교로 출근 후, 기숙사 건물로 바로 와서 문 두드리며 깨우기 시작했다고 한다.</p>' }
    };

    // ==========================================================
    // 2. 용의자 신문 데이터
    // ==========================================================
    const interrogationData = {
        kim: {
            name: '김여운',
            defaultImageSrc: 'source_ask/kim_00.png',
            dialogues: [
                { question: "메모지를 보여주며 누구에게 이런 메모를 남긴건지 묻는다.", answer: "그 메모는 제가 쓴 게 아닌데... 수아가 제 방에 있을 때 쓴 걸까요?", asked: false, answerImageSrc: 'source_ask/kim_01.png' },
                { question: "화장실 바닥에 그려진 반원 표시에 대해 묻는다.", answer: "글쎼요. 범인의 이름을 쓰려던 건 아닐까 싶네요. 아! 전 절대 범인이 아니지만요.", asked: false, answerImageSrc: 'source_ask/kim_01.png' },
                { question: "피해자가 이상했던 점은 없는 지 묻는다.", answer: "음... 최근들어 갑자기 차가워진 것 같달까? 착각일 수도 있지만요. 수아랑 소꿉친구면서 이 상황에 이런 말하기는 그렇지만, 걔는 좀 이상한 구석이 있었어요. 잘 지내다가도 가끔 자기 맘에 안 드는 게 있으면 바로 성질부리는 애라.", asked: false, answerImageSrc: 'source_ask/kim_02.png' }
            ]
        },
        sin: {
            name: '신투수',
            defaultImageSrc: 'source_ask/shin_00.png',
            dialogues: [
                { question: "창문 틀에 있던 흰색 실들에 대해 묻는다.", answer: "잘 모르겠어요. 뭐... 커튼같은 거에서 떨어진 거 아닐까요? ", asked: false, answerImageSrc: 'source_ask/shin_03.png' },
                { question: "오른손의 붕대에 대해 묻는다.", answer: "아, 이건 야구 연습하다가 좀 다쳤어요. 무리해서 공을 던졌나봐요.", asked: false, answerImageSrc: 'source_ask/shin_02.png' },
                { question: "피해자와 다툰 적은 없었는 지 묻는다.", answer: "사소한 말다툼은 종종 있었지만, 금방 풀었어요. 저희 사이 좋았어요. 우리 수아 이렇게 만든 범인, 꼭 되갚아줄겁니다.", asked: false, answerImageSrc: 'source_ask/shin_01.png' }
            ]
        },
        jang: {
            name: '장일등',
            defaultImageSrc: 'source_ask/jang_00.png',
            dialogues: [
                { question: "지워진 인스타그램 디엠에 대해 묻는다.", answer: "아... 사실 제가 얼마 전에 우연히 본 게 있어서요...", asked: false, answerImageSrc: 'source_ask/jang_01.png' },
                { question: "디엠 내용에 대해 더 추궁한다.", answer: "...그게요, 며칠 전에 야자끝나고 기숙사 돌아오는 길에 김여운이랑 신투수가 같이 있는 걸 봤어요. 분위기는 좋아보였죠.", asked: false, answerImageSrc: 'source_ask/jang_02.png' },
                { question: "피해자에게 왜 그런 디엠을 보냈는 지 묻는다.", answer: "사실은 요즘 박수아가 견제돼서 그 사진을 받고 혼란스러워하길 바랐어요. 박수아랑 신투수 둘이서 한 바탕하라고. 둘 다 한 성격하는 애들이니까요. 뭐... 제 죄는 아니잖아요?", asked: false, answerImageSrc: 'source_ask/jang_04.png' },
            ]
        },
        na: {
            name: '나토커',
            defaultImageSrc: 'source_ask/na_00.png',
            dialogues: [
                { question: "피해자의 방 쓰레기통에서 발견된 초콜릿과 메모에 대해 묻는다.", answer: "제가 준 초콜릿입니다. 메모는 내용대로 밤에 얼굴 한 번 보려고 했어요.", asked: false, answerImageSrc: 'source_ask/na_02.png' },
                { question: "책상 위 음료수와 쓰레기통 속 수면제에 대해 묻는다.", answer: "...12시에 수아가 만나주면 수아에게 수면제 탄 음료수를 먹이려고 했어요. 너무 사랑하니까 수아를 더 알고싶었을 뿐이에요.", asked: false, answerImageSrc: 'source_ask/na_01.png' },
                { question: "창문 밖 앞뜰에서 발견된 피뭍은 소매에 대해 묻는다.", answer: "제 건 아닙니다. 매주 목요일 아침 5시쯤 쓰레기차가 그 쪽에 오기는 한데... 거기서 떨어진 거 아닐까요? 범인이 버린 거라기엔 기숙사가 통금 때문에 5시 반에 문이 열리거든요. 뭐 범인이 학생이 아니라면 모르겠지만.", asked: false, answerImageSrc: 'source_ask/na_00.png' }
            ]
        },
        moon: {
            name: '문사감',
            defaultImageSrc: 'source_ask/moon_00.png',
            dialogues: [
                { question: "서랍 속 사진에 대해 묻는다.", answer: "제 딸 왕다래입니다. 하지만... 2년 전에 세상을 떠났죠.", asked: false, answerImageSrc: 'source_ask/moon_01.png' },
                { question: "사진 속 인물에 대해 더 묻는다.", answer: "다래는 스스로 목숨을 끊었어요. 저는... 엄마로서의 자격이 없습니다. 더는 이야기하고 싶진...", asked: false, answerImageSrc: 'source_ask/moon_02.png' },
                { question: "피해자의 핸드폰 사진첩 속 피해자와 같이 있는 인물에 대해 묻는다.", answer: "네. 제 딸 다래입니다. 둘은 중학생 때 절친한 친구였죠. 중간부턴가... 싸운 건지 사이가 틀어졌긴 했습니다. 자세히는 저도 모르겠네요.", asked: false, answerImageSrc: 'source_ask/moon_01.png' }
            ]
        },
    };



    // ==========================================================
    // 3. 모든 DOM 요소 한 번에 가져오기
    // ==========================================================

    // --- 용의자 정보 모달 요소 ---
    const suspectBoxes = document.querySelectorAll('.suspect-box');
    const characterModalOverlay = document.querySelector('.character-modal-overlay');
    const characterModalCloseBtn = document.querySelector('.character-modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalSummary = document.getElementById('modal-summary');
    const modalDetails = document.getElementById('modal-details');

    // --- 증거 수집 모달 요소 ---
    const evidenceState = {};
    const evidenceBoxes = document.querySelectorAll('.evidence-box');
    const evidenceModals = document.querySelectorAll('.modal-overlay:not(.character-modal-overlay)'); // 용의자 모달 제외
    const clickableAreas = document.querySelectorAll('.clickable-area');
    const popups = document.querySelectorAll('.popup-overlay');
    const popupGroups = document.querySelectorAll('.popup-group-overlay');
    const sceneBackButtons = document.querySelectorAll('.scene-back-btn');
    
    // 모든 닫기 버튼 통합 관리
    const allCloseButtons = document.querySelectorAll('.modal-close-btn, .popup-close-btn, .character-modal-close');

    // --- 용의자 신문 모달 요소 ---
    const characterItems = document.querySelectorAll('.character-item');
    const interrogationModal = document.querySelector('.interrogation-modal');
    const interrogationCloseBtn = document.querySelector('.interrogation-close');
    const interrogationCharacterImg = document.getElementById('interrogation-character-img');
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueSpeaker = document.getElementById('dialogue-speaker');
    const dialogueText = document.getElementById('dialogue-text');
    let activeCharacterId = null;
    let isAnswering = false;



    // ==========================================================
    // 4. 용의자 정보 모달 기능
    // ==========================================================
    
    function openCharacterModal(characterName) {
        const data = characterData[characterName]; // 용의자 정보 데이터 사용
        if (!data) return;
        modalImg.src = data.imageSrc;
        modalImg.alt = data.name;
        modalTitle.innerHTML = `<span class="modal-role">${data.role}</span><span class="modal-name">${data.name}</span>`;
        modalSummary.innerHTML = data.summary;
        modalDetails.innerHTML = data.details;
        characterModalOverlay.classList.remove('hidden');
    }

    function closeCharacterModal() {
        characterModalOverlay.classList.add('hidden');
    }

    suspectBoxes.forEach((box, index) => {
        const characterName = Object.keys(characterData)[index];
        box.addEventListener('click', () => {
            openCharacterModal(characterName);
        });
    });


    characterModalOverlay.addEventListener('click', (event) => {
        if (event.target === characterModalOverlay) {
            closeCharacterModal();
        }
    });



    // ==========================================================
    // 5. 증거 수집 기능
    // ==========================================================
    
    function updateCountersForRoom(roomModalId) {
        if (!evidenceState[roomModalId]) return;
        const state = evidenceState[roomModalId];
        const text = `수집한 증거물 ${state.found.size} / ${state.total}`;
        const modalCounter = document.querySelector(`#${roomModalId} .evidence-counter`);
        if (modalCounter) modalCounter.textContent = text;
        const activeScene = document.querySelector(`.scene-overlay[data-return-target="#${roomModalId}"]`);
        if (activeScene) {
            const sceneCounter = activeScene.querySelector('.evidence-counter');
            if (sceneCounter) sceneCounter.textContent = text;
        }
    }

    evidenceBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const modalId = box.dataset.modalTarget.substring(1);
            const modal = document.querySelector(`#${modalId}`);
            if (modal) {
                if (!evidenceState[modalId]) {
                    evidenceState[modalId] = {
                        found: new Set(),
                        total: parseInt(modal.dataset.totalEvidence, 10) || 0
                    };
                }
                updateCountersForRoom(modalId);
                modal.classList.remove('hidden');
            }
        });
    });

    clickableAreas.forEach(area => {
        area.addEventListener('click', (event) => {
            event.stopPropagation();
            if (area.classList.contains('evidence-item')) {
                const parentModal = area.closest('.modal-overlay');
                const parentScene = area.closest('.scene-overlay');
                let roomModalId = null;
                if (parentModal) {
                    roomModalId = parentModal.id;
                } else if (parentScene) {
                    roomModalId = parentScene.dataset.returnTarget.substring(1);
                }
                if (roomModalId && evidenceState[roomModalId]) {
                    const roomState = evidenceState[roomModalId];
                    if (roomModalId === 'modal-park') {
                        const allParkEvidence = document.querySelectorAll('#modal-park .evidence-item');
                        allParkEvidence.forEach(item => roomState.found.add(item.id));
                    } else {
                        if (!roomState.found.has(area.id)) {
                            roomState.found.add(area.id);
                        }
                    }
                    updateCountersForRoom(roomModalId);
                }
            }
            if (area.dataset.sceneTarget) {
                const parentModal = area.closest('.modal-overlay');
                const scene = document.querySelector(area.dataset.sceneTarget);
                if (scene && parentModal) {
                    parentModal.classList.add('hidden');
                    scene.dataset.returnTarget = '#' + parentModal.id;
                    scene.classList.remove('hidden');
                    updateCountersForRoom(parentModal.id);
                }
            } else if (area.dataset.popupTarget) {
                const target = document.querySelector(area.dataset.popupTarget);
                if (target) {
                    if (target.matches('.popup-group-overlay')) {
                        const slideIndex = parseInt(area.dataset.slideIndex, 10) || 0;
                        showSlide(target, slideIndex);
                    }
                    target.classList.remove('hidden');
                }
            }
        });
    });

    popupGroups.forEach(group => {
        const slides = group.querySelectorAll('.popup-slider .popup-content');
        const prevBtn = group.querySelector('.popup-nav-btn.prev');
        const nextBtn = group.querySelector('.popup-nav-btn.next');
        let currentIndex = 0;
        window.showSlide = (targetGroup, index) => {
            if (targetGroup !== group) return;
            slides.forEach((slide, i) => {
                slide.classList.toggle('hidden', i !== index);
            });
            currentIndex = index;
            updateNavButtons();
        };
        const updateNavButtons = () => {
            prevBtn.style.display = (currentIndex === 0) ? 'none' : 'block';
            nextBtn.style.display = (currentIndex === slides.length - 1) ? 'none' : 'block';
        };
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                showSlide(group, currentIndex - 1);
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentIndex < slides.length - 1) {
                showSlide(group, currentIndex + 1);
            }
        });
    });

    // 모든 모달/팝업 닫기 버튼 통합 리스너
    allCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal-overlay, .popup-overlay, .popup-group-overlay, .character-modal-overlay').classList.add('hidden');
        });
    });

    // 모든 오버레이 배경 클릭 시 닫기
    [...evidenceModals, ...popups, ...popupGroups].forEach(bg => {
        bg.addEventListener('click', (event) => {
            if (event.target === bg) {
                bg.classList.add('hidden');
            }
        });
    });

    sceneBackButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentScene = button.closest('.scene-overlay');
            const returnModalSelector = currentScene.dataset.returnTarget;
            if (returnModalSelector) {
                const returnModal = document.querySelector(returnModalSelector);
                if (returnModal) {
                    updateCountersForRoom(returnModal.id);
                    returnModal.classList.remove('hidden');
                }
            }
            currentScene.classList.add('hidden');
        });
    });



    // ==========================================================
    // 6. 용의자 신문 기능
    // ==========================================================
    characterItems.forEach(item => {
        item.addEventListener('click', () => {
            const characterId = item.dataset.character;
            openInterrogation(characterId);
        });
    });

    dialogueBox.addEventListener('click', (event) => {
        if (isAnswering) {
            showQuestions(activeCharacterId);
            isAnswering = false;
            return;
        }
        const clickedQuestion = event.target.closest('.question-item');
        if (clickedQuestion) {
            const questionIndex = parseInt(clickedQuestion.dataset.index, 10);
            showAnswer(activeCharacterId, questionIndex);
            isAnswering = true;
        }
    });

    interrogationCloseBtn.addEventListener('click', () => {
        if (activeCharacterId && interrogationData[activeCharacterId]) {
            interrogationData[activeCharacterId].dialogues.forEach(dialogue => {
                dialogue.asked = false;
            });
        }
        interrogationModal.classList.add('hidden');
    });

    function openInterrogation(characterId) {
        const data = interrogationData[characterId]; // 신문 데이터 사용
        if (!data) return;
        activeCharacterId = characterId;
        interrogationCharacterImg.src = data.defaultImageSrc; 
        showQuestions(characterId);
        isAnswering = false;
        interrogationModal.classList.remove('hidden');
    }

    function showQuestions(characterId) {
        const data = interrogationData[characterId];
        dialogueSpeaker.style.display = 'none';
        dialogueText.innerHTML = '';
        interrogationCharacterImg.src = data.defaultImageSrc;
        dialogueBox.classList.remove('is-answering', 'q-count-2', 'q-count-3');
        if (data.dialogues.length === 2) {
            dialogueBox.classList.add('q-count-2');
        } else if (data.dialogues.length >= 3) {
            dialogueBox.classList.add('q-count-3');
        }
        data.dialogues.forEach((dialogue, index) => {
            const questionEl = document.createElement('p');
            questionEl.classList.add('question-item');
            questionEl.textContent = dialogue.question;
            questionEl.dataset.index = index;
            if (dialogue.asked) {
                questionEl.classList.add('asked');
            }
            dialogueText.appendChild(questionEl);
        });
    }

    function showAnswer(characterId, questionIndex) {
        const data = interrogationData[characterId];
        const dialogue = data.dialogues[questionIndex];
        interrogationCharacterImg.src = dialogue.answerImageSrc; 
        dialogueBox.classList.remove('q-count-2', 'q-count-3');
        dialogueBox.classList.add('is-answering');
        dialogueSpeaker.textContent = data.name;
        dialogueSpeaker.style.display = 'block';
        dialogueText.innerHTML = '';
        dialogueText.textContent = dialogue.answer;
        dialogue.asked = true;
    }
});