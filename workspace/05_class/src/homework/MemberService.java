package homework;

import java.util.Scanner;

public class MemberService {
	private MemberDTO[] ar = new MemberDTO[5];
	Scanner scan = new Scanner(System.in);
	
	public void menu() {
		int num;
		
		while(true) {
			System.out.println();
			System.out.println("******************");
			System.out.println("   1. 가입");
			System.out.println("   2. 출력");
			System.out.println("   3. 수정");
			System.out.println("   4. 탈퇴");
			System.out.println("   5. 끝내기");
			System.out.println("******************");
			System.out.print("   번호 : ");
			num = scan.nextInt();
			
			if(num == 5) break;
			if(num == 1) insert();
			else if(num == 2) list();
			else if(num == 3) update();
			else if(num == 4) delete();
		}//while		
	}
	
	public void insert() {
		System.out.println();
		int i;
		for(i=0; i<ar.length; i++) {
			if(ar[i] == null) break;
		}
		
		if(i==ar.length) 
			System.out.println("정원이 꽉 찼습니다.");
		else {
			System.out.print("이름 입력 : ");
			String name = scan.next();
			System.out.print("나이 입력 : ");
			int age = scan.nextInt();
			System.out.print("핸드폰 입력 : "); 
			String phone = scan.next();
			System.out.print("주소 입력 : "); 
			String address = scan.next();
			
			ar[i] = new MemberDTO(name, age, phone, address);
			
			System.out.println("1 row created");
		}
	}
	
	public void list() {
		System.out.println();
		for(int i=0; i<ar.length; i++) {
			if(ar[i] != null) {
				System.out.println(ar[i]);
			}
		}//for
	}
	
	public void update() {
		System.out.println();
		System.out.print("핸드폰 번호 입력 : ");
		String phone = scan.next();
		
		int i;
		for(i=0; i<ar.length; i++) {
			if(ar[i] != null && ar[i].getPhone().equals(phone)) {
				System.out.println(ar[i]);
				
				System.out.println();
				System.out.print("수정 할 이름 입력 : "); //유이민
				String name = scan.next();
				System.out.print("수정 할 나이 입력 : "); //36
				int age = scan.nextInt();
				System.out.print("수정 할 핸드폰 입력 : "); //010-2222-2222
				phone = scan.next();
				System.out.print("수정 할 주소 입력 : ");
				String address = scan.next();
				
				ar[i].setName(name);
				ar[i].setAge(age);
				ar[i].setPhone(phone);
				ar[i].setAddress(address);
				
				System.out.println("1 row deleted");
				
				break;
			}
		}//for
		
		if(i==ar.length)
			System.out.println("찾는 회원이 없습니다.");
	}
	
	public void delete() {
		System.out.println();
		System.out.print("핸드폰 번호 입력 : ");
		String phone = scan.next();
		
		int i;
		for(i=0; i<ar.length; i++) {
			if(ar[i] != null && ar[i].getPhone().equals(phone)) {
				ar[i] = null;
				System.out.println("1 row deleted");
				
				break;
			}
		}//for
		
		if(i==ar.length)
			System.out.println("찾는 회원이 없습니다.");
	}

}










