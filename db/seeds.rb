unless User.exists?(email: 'john.doe@example.com')
  p "creating user with email: 'john.doe@example.com'"
  User.create!(first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', password: '12345')
end

user = User.find_by_email('john.doe@example.com')

p "creating contact for user with email: 'john.doe@example.com'"
Contact.create!(user: user, phone_number: '380939543298', first_name: 'Vitalii')
