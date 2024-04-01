package class_;

public class SungJukMain2 {

	public static void main(String[] args) {		
		SungJuk[] ar = new SungJuk[3]; //객체 배열 생성
		ar[0] = new SungJuk();
		ar[1] = new SungJuk();
		ar[2] = new SungJuk();
		
		ar[0].setData("홍길동", 90, 96, 100); //호출
		ar[1].setData("라이언", 80, 65, 72);
		ar[2].setData("프로도", 73, 68, 52);
		
		for(SungJuk data : ar) {
			data.calc();
			
			System.out.println(data.getName() + "\t"
							 + data.getKor() + "\t"
							 + data.getEng() + "\t"
							 + data.getMath() + "\t"
							 + data.getTot() + "\t"
							 + String.format("%.2f", data.getAvg()) + "\t"
							 + data.getGrade());
			
		}//for i
		
	}

}


