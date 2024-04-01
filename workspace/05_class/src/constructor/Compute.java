package constructor;

public class Compute {
	private int x, y, sum, sub, mul;
	private double div;
	
	public Compute(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	public void calc() {
		this.sum = this.x + this.y;
		sub = x - y;
		mul = x * y;
		div = (double)x / y;
	}
	
	public int getX(){
		return x;
	}
	public int getY(){
		return y;
	}
	public int getSum(){
		return sum;
	}
	public int getSub(){
		return sub;
	}
	public int getMul(){
		return mul;
	}
	public double getDiv(){
		return div;
	}
	
}
