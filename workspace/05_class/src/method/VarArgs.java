package method;

public class VarArgs {

	public static void main(String[] args) {
		VarArgs m = new VarArgs();
		
		System.out.println("합 = " + m.sum(10, 20));
		System.out.println("합 = " + m.sum(10, 20, 30));
		System.out.println("합 = " + m.sum(10, 20, 30, 40));

	}
	
	public int sum(int...ar) { //인수의 개수를 자유롭게, 내부적으로는 배열화
		int hab = 0;
		for(int i=0; i<ar.length; i++) {
			hab += ar[i];
		}
		
		return hab;
	}
		
	//Overload
	/*
	public int sum(int a, int b){ //인수, 매개변수
		return a+b;
	}
	
	public int sum(int a, int b, int c){ //인수, 매개변수
		return a+b+c;
	}
	
	public int sum(int a, int b, int c, int d){ //인수, 매개변수
		return a+b+c+d;
	}
	*/

}
