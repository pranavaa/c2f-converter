def celsius_to_fahrenheit(celsius):
  """Converts Celsius to Fahrenheit."""
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit

def main():
  """Gets Celsius input and prints Fahrenheit output."""
  try:
    celsius = float(input("Enter temperature in Celsius: "))
    fahrenheit = celsius_to_fahrenheit(celsius)
    print(f"{celsius} degrees Celsius is equal to {fahrenheit:.2f} degrees Fahrenheit.")
  except ValueError:
    print("Invalid input. Please enter a numerical value.")

if __name__ == "__main__":
  main()