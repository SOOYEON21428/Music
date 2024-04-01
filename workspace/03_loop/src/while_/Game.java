package while_;

import java.util.Scanner;

public class Game {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int com, user, count=0;
		
		while(true) {
			com = (int)(Math.random()*100 + 1); //난수 발생
			System.out.println(com);

			System.out.println("1 ~ 100사이의 숫자를 맞추세요");
			count = 0;
			
			while(true) {
				System.out.print("숫자 입력 : ");
				user = scan.nextInt();
				count++; //1 2 3 4 
				
				if(com == user) {
					System.out.println("딩동뎅 " + count + "번만에 맞추셨습니다.");				
					break; //while를 벗어나라
				}
				else if(com > user) System.out.println(user+"보다 큰 숫자입니다");
				else System.out.println(user+"보다 작은 숫자입니다");
			}//while
			System.out.println();
			
			System.out.print("또 할래? (y/n) : ");
			String yn = scan.next();
			
			if(yn.equals("n")) break;
			
		} //while
		System.out.println("프로그램 종료합니다.");

	}

}

/*
[문제] 숫자 맞추기 게임
- 컴퓨터가 1 ~ 100사이의 난수를 발생하면, 발생한 난수를 맞추는 게임
- 몇 번만에 맟주었는지 출력한다.

[실행결과]
1 ~ 100사이의 숫자를 맞추세요 (77)

숫자 입력 : 50
50보다 큰 숫자입니다
숫자 입력 : 80
80보다 작은 숫자입니다.
~
~
숫자 입력 : 77
딩동뎅...x번만에 맞추셨습니다.

또 할래? (y/n) : n
프로그램을 종료합니다. 


 */







