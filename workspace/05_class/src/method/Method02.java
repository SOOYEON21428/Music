package method;

public class Method02 {

	public static void main(String[] args) {
		Method02 m = new Method02();
		
		System.out.println("합 = " + m.sum(25, 36)); //호출
		System.out.println("차 = " + m.sub(25, 36));
		System.out.println("곱 = " + m.mul(25, 36));
		System.out.println("몫 = " + m.div(25, 36)); //0.xxxx

	}
	
	//구현
	public String div(int a, int b){ //인수, 매개변수
		return String.format("%.3f", (double)a/b);
	}
	
	public int sum(int a, int b){ //인수, 매개변수
		return a+b;
	}
	
	public int sub(int a, int b){ //인수, 매개변수
		return a-b;
	}
	
	public int mul(int a, int b){ //인수, 매개변수
		return a*b;
	}
	
	

}
