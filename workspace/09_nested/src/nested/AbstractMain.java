package nested;

public class AbstractMain {

	public static void main(String[] args) {
		//AbstractTest at = new AbstractTest(); - error
		AbstractTest at = new AbstractTest() { //익명 Inner Class
			
			@Override
			public void setName(String name) {//구현
				this.name = name;
			} 
		};
		
		//inerface 생성
		InterA in = new InterA() {
			
			@Override
			public void aa() {}
			
			@Override
			public void bb() {}
		};
		
		//추상메소드가 없는 추상클래스 생성
		AbstractExam ae = new AbstractExam() {
			//추상메소드가 없기 때문에 원하는 메소드를 골라서 Override
		};
		
	}

}


















