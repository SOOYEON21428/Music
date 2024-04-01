package class2;

class StaticTest {
	private int a; //필드, 인스턴스 변수
	private static int b; //필드, 클래스 변수
	
	static {
		System.out.println("static 초기화 영역");
		b = 7;
	}
	public StaticTest() {
		System.out.println("기본 생성자");
		this.a = 7;
	}
	
	public void calc(){
		a++;
		b++;
	}
	
	public void disp(){
		System.out.println("a = " + this.a + "\t b = " + StaticTest.b);
	}
	
	public static void output(){
		System.out.println("static method...");
		//System.out.println("a = " + this.a + "\t b = " + StaticTest.b); - error
	}
	
}
//------------
public class StaticMain {

	public static void main(String[] args) {
		StaticTest aa = new StaticTest();
		aa.calc();
		aa.disp();
		System.out.println();
		
		StaticTest bb = new StaticTest();
		bb.calc();
		bb.disp();
		System.out.println();
		
		StaticTest cc = new StaticTest();
		cc.calc();
		cc.disp();
		System.out.println();
		
		StaticTest.output(); //클래스명.메소드
		aa.output(); //객체.메소드

	}

}











