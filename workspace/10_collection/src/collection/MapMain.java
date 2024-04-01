package collection;

import java.util.HashMap;
import java.util.Map;

public class MapMain {

	public static void main(String[] args) {
		Map<String, String> map = new HashMap<String, String>();
		
		map.put("book101", "백설공주");
		map.put("book201", "인어공주");
		map.put("book102", "백설공주");//Value 중복허용
		map.put("book301", "피오나");
		map.put("book101", "엄지공주");//key 중복허용, 대신 백설공주의 값은 사라지고 엄지공주만 남는다.
		
		System.out.println(map.get("book101"));
		System.out.println(map.get("book102"));
		System.out.println(map.get("book201"));
		System.out.println(map.get("book301"));
		System.out.println();
		
		for (Map.Entry<String, String> entry : map.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.println("Key: " + key + ", Value: " + value);
        }

	}

}
