package org.example;

public class Inheritance extends SuperClass implements Interface {
	int employeeAge ;
	float employeeSalary ;

	public Inheritance(int employeeId, String employeeName, String employeeDepartment,int employeeAge,
			float employeeSalary) {
		super(employeeId, employeeName, employeeDepartment);
		this.employeeAge = employeeAge;
		this.employeeSalary = employeeSalary;
	}

	public  void display(){
		System.out.println("Name of the employee is :-" + employeeName);
		System.out.println("Id of the employee is :-" + employeeId);
		System.out.println("Department of the employee is :-" + employeeDepartment);
		System.out.println("Age of the employee is :-" + employeeAge);
		System.out.println("Salary of the employee is :-" + employeeSalary);
	}
	public static void main(String[] args) {
		Inheritance i = new Inheritance(123, "Rakesh", "Software", 23, 800000);
		i.display();
		i.show();
		System.out.println("--------------");
		SuperClass i1 =  new Inheritance(123, "Rakesh", "Software", 23, 800000);
		i1.display();
		

	}

	@Override
	public void show() {
		System.out.println("This is abstract method implementation from Interface");
		
	}

}
