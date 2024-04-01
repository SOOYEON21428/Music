package class_;

public class SungJukMain {

	public static void main(String[] args) {
		SungJuk aa = new SungJuk(); //객체 생성
		aa.setData("홍길동", 90, 96, 100); //호출
		aa.calc(); //호출
		System.out.println(aa.getName() + "\t"
						 + aa.getKor() + "\t"
						 + aa.getEng() + "\t"
						 + aa.getMath() + "\t"
						 + aa.getTot() + "\t"
						 + String.format("%.2f", aa.getAvg()) + "\t"
						 + aa.getGrade());
		//------------
		SungJuk bb = new SungJuk(); //객체 생성
		bb.setData("라이언", 80, 65, 72); //호출
		bb.calc(); //호출
		System.out.println(bb.getName() + "\t"
						 + bb.getKor() + "\t"
						 + bb.getEng() + "\t"
						 + bb.getMath() + "\t"
						 + bb.getTot() + "\t"
						 + String.format("%.2f", bb.getAvg()) + "\t"
						 + bb.getGrade());
		//------------
		SungJuk cc = new SungJuk(); //객체 생성
		cc.setData("프로도", 73, 68, 52); //호출
		cc.calc(); //호출
		System.out.println(cc.getName() + "\t"
						 + cc.getKor() + "\t"
						 + cc.getEng() + "\t"
						 + cc.getMath() + "\t"
						 + cc.getTot() + "\t"
						 + String.format("%.2f", cc.getAvg()) + "\t"
						 + cc.getGrade());
		

	}

}

/*
[문제] 성적처리
- 평균은 소수이하 2째자리까지 처리한다.

클래스명 : SungJuk
필드 : name, kor, eng, math, tot, avg, grade
메소드 : setData(이름, 국어, 영어, 수학)
       calc() - 총점, 평균, 학점 계산
	   getName()
	   getKor()
	   getEng()
	   getMath()
       getTot()
       getAvg()
       getGrade()

클래스명 : SungJukMain

[실행결과]
----------------------------------------------------
이름		국어		영어		수학		총점		평균		학점
----------------------------------------------------
홍길동		90		96		100
*/









