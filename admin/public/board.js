// board.js

// 샘플 게시글 데이터
const sampleBoardData = [
  { id: 1, title: '공지사항', author: '관리자', date: '2023-06-18', isApproved: true },
  { id: 2, title: '이벤트 안내', author: '홍길동', date: '2023-06-17', isApproved: false },
  { id: 3, title: '자주 묻는 질문', author: '김철수', date: '2023-06-16', isApproved: false },
  { id: 4, title: '신규 기능 소개', author: '이영희', date: '2023-06-15', isApproved: true }
];

// 게시글 테이블 생성 함수
function createBoardTable() {
  const tableBody = document.getElementById('userTableBody');
  tableBody.innerHTML = '';

  sampleBoardData.forEach(board => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = board.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = board.author;
    row.appendChild(authorCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = board.date;
    row.appendChild(dateCell);

    const approvalCell = document.createElement('td');
    const approvalButton = document.createElement('button');
    approvalButton.textContent = board.isApproved ? '거부' : '승인';
    approvalButton.onclick = () => toggleBoardApproval(board.id);
    approvalCell.appendChild(approvalButton);
    row.appendChild(approvalCell);

    const actionCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = '수정';
    editButton.onclick = () => editBoard(board.id);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = () => deleteBoard(board.id);
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// 게시글 승인/거부 토글 함수
function toggleBoardApproval(boardId) {
  const board = sampleBoardData.find(b => b.id === boardId);
  board.isApproved = !board.isApproved;
  createBoardTable();
}

// 게시글 수정 함수
function editBoard(boardId) {
  const board = sampleBoardData.find(b => b.id === boardId);
  if (board.isApproved) {
    // 승인된 게시글만 수정 가능
    console.log(`게시글 ${board.title}을 수정합니다.`);
  } else {
    console.log('승인되지 않은 게시글은 수정할 수 없습니다.');
  }
}

// 게시글 삭제 함수
function deleteBoard(boardId) {
  const board = sampleBoardData.find(b => b.id === boardId);
  if (board.isApproved) {
    // 승인된 게시글만 삭제 가능
    console.log(`게시글 ${board.title}을 삭제합니다.`);
  } else {
    console.log('승인되지 않은 게시글은 삭제할 수 없습니다.');
  }
}

// 페이지 로드 시 게시글 테이블 생성
createBoardTable();
