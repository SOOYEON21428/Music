package array;

public class BubbleSort {

	public static void main(String[] args) {
		int[] ar = {35, 48, 25, 72, 50};
		
		System.out.print("정렬 전 : ");
		for(int data : ar){
			System.out.print(data+"  ");
		}
		System.out.println();
		
		//Bubble Sort
		for(int i=0; i<ar.length-1; i++) {
			for(int j=0; j<ar.length-1-i; j++) {
				if(ar[j] > ar[j+1]) {
					int temp = ar[j];
					ar[j] = ar[j+1];
					ar[j+1] = temp;
				}
			}//for j
		}//for i
		
		System.out.print("정렬 후 : ");
		for(int data : ar){
			System.out.print(data+"  ");
		}
		System.out.println();

	}

}
