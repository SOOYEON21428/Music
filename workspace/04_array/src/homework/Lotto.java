package homework;

import java.util.Scanner;

public class Lotto {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int[] lotto = new int[6];
		
		System.out.print("현금 입력 : ");
		int money = scan.nextInt();
		
		for(int k=1; k<=money/1000; k++) {
			//난수 - 중복X
			for(int i=0; i<lotto.length; i++) {
				lotto[i] = (int)(Math.random()* 45 + 1);
				
				//중복X
				for(int j=0; j<i; j++) {
					if(lotto[i] == lotto[j]) {
						i--;
						break;
					}			
				}//for j
			}//for i
			
			//정렬
			for(int i=0; i<lotto.length-1; i++) {
				for(int j=i+1; j<lotto.length; j++) {
					if(lotto[i] > lotto[j]) {
						int temp = lotto[i];
						lotto[i] = lotto[j];
						lotto[j] = temp;
					}
				}//for j
			}//for i
			
			//출력
			for(int data : lotto) { 
				System.out.print(String.format("%4d", data));	
			}
			System.out.println();
			
			//5줄씩 끊어서
			if(k%5 == 0) System.out.println();
		}//for k
	}

}
/*
[문제] 로또 프로그램
1~45 사이의 난수를 6개 발생한다.
단, 숫자는 중복이 되어서는 안된다.
1줄당 금액이 천원이다.
1줄당 오름차순으로 정렬하여 출력한다.

[실행결과]
현금 입력 : 3000
    2    4   19   39   43   44
   22   26   33   38   39   42
    5    6    8   25   35   45
    
현금 입력 : 7000    
    2    4   19   39   43   44
   22   26   33   38   39   42
    5    6    8   25   35   45
    3   14   23   30   34   35
   18   20   25   27   32   37

    1   16   32   34   41   42
    5    6   18   30   33   44    
 */












