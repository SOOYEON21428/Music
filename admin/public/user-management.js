// 샘플 사용자 데이터
const users = [
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '김철수', email: 'kim@example.com' },
    { id: 3, name: '이영희', email: 'lee@example.com' },
  ];
  
  // 사용자 테이블 생성 함수
  function renderUserTable() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
  
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="deleteUser(${user.id})">삭제</button>
        </td>
      `;
      userTableBody.appendChild(row);
    });
  }
  
  // 사용자 검색 기능
  function searchUsers() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  
    renderUserTable(filteredUsers);
  }
  
  // 사용자 삭제 기능
  function deleteUser(userId) {
    // 실제 사용자 삭제 로직 구현
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
      users.splice(index, 1);
      renderUserTable();
    }
  }
  
  // 초기 테이블 렌더링
  renderUserTable();
  