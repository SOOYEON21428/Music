package method;

public class Method01 {
	
	public static void main(String[] args) {
		Method01 m = new Method01();
		System.out.println("객체 m = " + m);
		System.out.println("객체 m = " + m.toString());
		
		//호출
		m.display();
		
		Method01.output();
		m.output();
		output();
	}
	
	//구현
	public void display() {
		System.out.println("method...");
	}
	
	public static void output() {
		System.out.println("static method...");
	}

}
