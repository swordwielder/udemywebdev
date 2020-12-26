import java.util.*;

class Main{
    public static void main(String [] args){
        List<Boolean> list = new ArrayList<>();
        list.add(true);
        list.add(Boolean.parseBoolean("FalSe"));
        list.add(Boolean.TRUE);
        System.out.println(list.size());
        System.out.print(list.get(1) instanceof Boolean);
        System.out.println(list);
    }
}