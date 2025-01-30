import java.util.Scanner;

public class LinearSearch {
    static Scanner sc = new Scanner(System.in);
    public static int[] takeInput(){
        System.out.println("enter the no of element of the array : ");
        int size = sc.nextInt();
        int arr[] = new int[size];
        for(int i = 0; i < arr.length; i++){
            System.out.print("Enter the " + i + "th element.");
            arr[i] = sc.nextInt();
        }
        return arr;
    }
    public static void print(int arr[]){
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i]);
        }
    }
    public static int linear(int arr[], int x){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == x){
                return i;
            }
        }
        return -1; 
    }
    public static void main(String[] args) {
        int arr[] = takeInput();
        print(arr);
        System.out.println("Enter the element to find!");
        int x = sc.nextInt(); 
        int ans = linear(arr, x);
        System.out.println(ans);
    }
}