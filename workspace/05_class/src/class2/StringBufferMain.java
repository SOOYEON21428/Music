package class2;

import java.util.Scanner;

public class StringBufferMain {
	private int dan;
	
	public StringBufferMain() {
		Scanner scan = new Scanner(System.in);
		System.out.print("원하는 단을 입력 : ");
		dan = scan.nextInt();
	}
	
	public void display() {
		StringBuffer buffer = new StringBuffer();
		
		for(int i=1; i<=9; i++){
			//System.out.println(dan + "*" + i + "=" + dan*i);
			
			buffer.append(dan);
			buffer.append("*");
			buffer.append(i);
			buffer.append("=");
			buffer.append(dan*i);
			
			System.out.println(buffer.toString()); //StringBuffer를 String 변환
			
			buffer.delete(0, buffer.length());
			
		}//for
	}

	public static void main(String[] args) {
		StringBufferMain sbf = new StringBufferMain();
		sbf.display();

	}

}

/*
원하는 단을 입력 : 2		생성자
------------------------------
2*1=2				display()
2*2=4
2*3=6


2*9=18
*/