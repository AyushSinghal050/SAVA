class CreatePatients < ActiveRecord::Migration[7.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.string :abha_number
      t.string :abha_id
      t.integer :abha_phone_number
      t.string :aadhar_number
      t.integer :aadhar_phone_number
      t.string :abha_consent
      t.string :abha_otp
      t.string :aadhar_otp
      t.string :abha_phone_verified
      t.string :aadhar_phone_verified
      t.string :abha_verified

      t.timestamps
    end
  end
end
