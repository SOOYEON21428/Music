package abstract_;

import java.util.Calendar;
import java.util.Scanner;

class CalendarEx {
	private int year, month, week, lastDay;
	
	public CalendarEx() {
		Scanner scan = new Scanner(System.in);
		
		System.out.print("년도 입력 : ");
		this.year = scan.nextInt();
		System.out.print("월 입력 : ");
		this.month = scan.nextInt();
	}
	
	public void calc() {
		Calendar cal = Calendar.getInstance(); //시스템이 기준으로 클래스 생성
		
		//기준 변경
		//cal.set(cal.YEAR, year);
		//cal.set(cal.MONTH, month-1);
		//cal.set(cal.DAY_OF_MONTH, 1);
		
		cal.set(year, month-1, 1);
		week = cal.get(Calendar.DAY_OF_WEEK); //1일의 요일 구하기
		lastDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH); //월의 마지막 일 구하기
	}
	
	public void display() {
		System.out.println("일\t월\t화\t수\t목\t금\t토");
		for(int i=1; i<week; i++) {
			System.out.print("\t");
		}
		for(int i=1; i<=lastDay; i++) {
			System.out.print(i + "\t");
			
			if(week%7 == 0) System.out.println();
			week++;
		}//for
		System.out.println();
	}
}
//----------
public class CalendarMain {

	public static void main(String[] args) {
		CalendarEx ce = new CalendarEx();
		ce.calc();
		ce.display();
	}

}

/*
[문제] 만년달력

[클래스]
CalendarEx
[필드]
필드는 원하는 것으로 직접 잡기 
[메소드]
생성자 : 년도, 월을 입력
- 기본생성자 : 입력
- 메소드 : calc() -> 매달 1일의 요일이 무엇인지? (Calendar에 메소드를 찾아서 수행)
                -> 매달 마지막이 28, 29, 30, 31 무엇인지? (Calendar에 메소드를 찾아서 수행)
         display() -> 출력
         
[클래스]
CalendarMain         

[실행결과]
년도 입력 : 2024						년도 입력 : 2000
월 입력 : 1							월 입력 : 2

일	월	화	수	목	금	토			일	월	화	수	목	금	토
	1	2	3	4	5	6					1	2	3	4	5
7	8	9	10	11	12	13			6	7	8	9	10	11	12
14	15	16	17	18	19	20			13	14	15	16	17	18	19
21	22	23	24	25	26	27			20	21	22	23	24	25	26
28	29	30	31						27	28	29
 */








