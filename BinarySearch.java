import java.util.Scanner;

public class BinarySearch {
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
 
    public static int binarySearch(int arr[], int x){
        int i = 0; 
        int j = arr.length - 1;

        while(i <= j){
            int mid = (i + j) / 2;
            if(arr[mid] == x){
                return mid;
            } else if(arr[mid] > x){
                j = mid - 1;
            } else {
                i = mid + 1; 
            }
        } 
        return -1; 
    }

    public static void main(String[] args) {
        int arr[] = takeInput();
        System.out.println("Enter the element to find : ");
        int x = sc.nextInt();
        int ans = binarySearch(arr, x);
        System.out.println(ans);
    }
}
