package org.example;

import java.util.Scanner;

public class HotelMenu {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		System.out.println("Choose 1 for order food");
		System.out.println("Choose 2 for home delivary");
		System.out.println("Choose 3 for order cancle");
		int n = sc.nextInt();
		
		switch(n){
		case 1 : System.out.println("you have ordered the food"); break ;
		case 2 : System.out.println("you have ordered for home deliavary"); break ;
		case 3 : System.out.println("you have canceled the order"); break ;
		}
	}

}
