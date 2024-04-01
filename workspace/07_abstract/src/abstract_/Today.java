package abstract_;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Today {

	public static void main(String[] args) throws ParseException {
		Date d = new Date();
		System.out.println("오늘 날짜 : " + d);

		SimpleDateFormat sdf = new SimpleDateFormat("y년 MM월 dd일 E요일 HH:mm:ss");
		System.out.println("오늘 날짜 : " + sdf.format(d));
		System.out.println();
		
		//내 생일 - 1991 07 16 10:25:37 입력
		SimpleDateFormat input = new SimpleDateFormat("yyyyMMddHHmmss");
		Date birth = input.parse("19910716102537");   //String -> Date 변환
		System.out.println("내 생일 : " + birth);
		System.out.println("내 생일 : " + sdf.format(birth));
		System.out.println();
		
		//시스템의 날짜와 시간을 기준으로 생성
		//Calendar cal = new Calendar(); - error
		//Calendar cal = new GregorianCalendar(); //Sub class 이용하여 생성
		Calendar cal = Calendar.getInstance(); //메소드를 이용하여 생성
		
		//int year = cal.get(Calendar.YEAR);
		//int year = cal.get(cal.YEAR);
		int year = cal.get(1);
		
		//int month = cal.get(cal.MONTH); 
		int month = cal.get(2)+1; //1월-0, 2월-1, 3월-2
		
		int day = cal.get(cal.DAY_OF_MONTH);
		int week = cal.get(cal.DAY_OF_WEEK); //일-1, 월-2, 화-3, 수-목
		
		String dayOfWeek = null;
		switch(week) {
		case 1 : dayOfWeek = "일요일"; break;
		case 2 : dayOfWeek = "월요일"; break;
		case 3 : dayOfWeek = "화요일"; break;
		case 4 : dayOfWeek = "수요일"; break;
		case 5 : dayOfWeek = "목요일"; break;
		case 6 : dayOfWeek = "금요일"; break;
		case 7 : dayOfWeek = "토요일"; break;
		}
		
		
		int hour = cal.get(cal.HOUR_OF_DAY);
		int minute = cal.get(cal.MINUTE);
		int second = cal.get(cal.SECOND);
		
		System.out.println(year + "년 " + month + "월 " + day + "일 " + dayOfWeek + " "
				 + hour + ":" + minute + ":" + second);
	}

}





























