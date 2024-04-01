package for_;

public class For03 {

	public static void main(String[] args) {
		int sum = 0;
		int mul = 1;
		
		for(int i=1; i<=10; i++) {
			sum = sum + i;
			System.out.println(i + "\t" + sum);
		}//for
		System.out.println();
		
		for(int i=1; i<=10; i++) {
			mul = mul * i;
			System.out.println(i + "\t" + mul);
		}
		System.out.println();

	}

}
