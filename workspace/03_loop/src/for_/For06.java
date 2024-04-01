package for_;

import java.util.Scanner;

public class For06 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int mul;
		
		while(true) {
			mul = 1;
			
			System.out.print("숫자 입력 : ");
			int num = scan.nextInt();
			
			if(num == 0) break;
			if(num < 0) continue;
			
			for(int i=1; i<=num; i++) {
				mul *= i;
			}//for
			System.out.println(num + "! = " + mul);
						
		}//while
		System.out.println("프로그램을 종료합니다.");

	}

}

/*
[문제] 팩토리얼을 구하시오
- 음수가 입력되면 다시 입력을 받는다.
- 0이 입력되면 프로그램을 종료한다.
- 숫자는 1부터 10까지만 입력한다.

[실행결과]
숫자 입력 : 3
3! = 6 (1*2*3)

숫자 입력 : -3
숫자 입력 : -5
숫자 입력 : 5
5! = 120 (1*2*3*4*5)

숫자 입력 : 0
프로그램을 종료합니다.

 */











