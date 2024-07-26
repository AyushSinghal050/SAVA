require "application_system_test_case"

class PatientsTest < ApplicationSystemTestCase
  setup do
    @patient = patients(:one)
  end

  test "visiting the index" do
    visit patients_url
    assert_selector "h1", text: "Patients"
  end

  test "should create patient" do
    visit patients_url
    click_on "New patient"

    fill_in "Aadhar number", with: @patient.aadhar_number
    fill_in "Aadhar otp", with: @patient.aadhar_otp
    fill_in "Aadhar phone number", with: @patient.aadhar_phone_number
    fill_in "Aadhar phone verified", with: @patient.aadhar_phone_verified
    fill_in "Abha consent", with: @patient.abha_consent
    fill_in "Abha", with: @patient.abha_id
    fill_in "Abha number", with: @patient.abha_number
    fill_in "Abha otp", with: @patient.abha_otp
    fill_in "Abha phone number", with: @patient.abha_phone_number
    fill_in "Abha phone verified", with: @patient.abha_phone_verified
    fill_in "Abha verified", with: @patient.abha_verified
    fill_in "Email", with: @patient.email
    fill_in "First name", with: @patient.first_name
    fill_in "Last name", with: @patient.last_name
    fill_in "Phone number", with: @patient.phone_number
    click_on "Create Patient"

    assert_text "Patient was successfully created"
    click_on "Back"
  end

  test "should update Patient" do
    visit patient_url(@patient)
    click_on "Edit this patient", match: :first

    fill_in "Aadhar number", with: @patient.aadhar_number
    fill_in "Aadhar otp", with: @patient.aadhar_otp
    fill_in "Aadhar phone number", with: @patient.aadhar_phone_number
    fill_in "Aadhar phone verified", with: @patient.aadhar_phone_verified
    fill_in "Abha consent", with: @patient.abha_consent
    fill_in "Abha", with: @patient.abha_id
    fill_in "Abha number", with: @patient.abha_number
    fill_in "Abha otp", with: @patient.abha_otp
    fill_in "Abha phone number", with: @patient.abha_phone_number
    fill_in "Abha phone verified", with: @patient.abha_phone_verified
    fill_in "Abha verified", with: @patient.abha_verified
    fill_in "Email", with: @patient.email
    fill_in "First name", with: @patient.first_name
    fill_in "Last name", with: @patient.last_name
    fill_in "Phone number", with: @patient.phone_number
    click_on "Update Patient"

    assert_text "Patient was successfully updated"
    click_on "Back"
  end

  test "should destroy Patient" do
    visit patient_url(@patient)
    click_on "Destroy this patient", match: :first

    assert_text "Patient was successfully destroyed"
  end
end
