json.extract! patient, :id, :first_name, :last_name, :email, :phone_number, :abha_number, :abha_id, :abha_phone_number, :aadhar_number, :aadhar_phone_number, :abha_consent, :abha_otp, :aadhar_otp, :abha_phone_verified, :aadhar_phone_verified, :abha_verified, :created_at, :updated_at
json.url patient_url(patient, format: :json)
