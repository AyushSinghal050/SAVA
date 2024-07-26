require "test_helper"

class PatientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patient = patients(:one)
  end

  test "should get index" do
    get patients_url
    assert_response :success
  end

  test "should get new" do
    get new_patient_url
    assert_response :success
  end

  test "should create patient" do
    assert_difference("Patient.count") do
      post patients_url, params: { patient: { aadhar_number: @patient.aadhar_number, aadhar_otp: @patient.aadhar_otp, aadhar_phone_number: @patient.aadhar_phone_number, aadhar_phone_verified: @patient.aadhar_phone_verified, abha_consent: @patient.abha_consent, abha_id: @patient.abha_id, abha_number: @patient.abha_number, abha_otp: @patient.abha_otp, abha_phone_number: @patient.abha_phone_number, abha_phone_verified: @patient.abha_phone_verified, abha_verified: @patient.abha_verified, email: @patient.email, first_name: @patient.first_name, last_name: @patient.last_name, phone_number: @patient.phone_number } }
    end

    assert_redirected_to patient_url(Patient.last)
  end

  test "should show patient" do
    get patient_url(@patient)
    assert_response :success
  end

  test "should get edit" do
    get edit_patient_url(@patient)
    assert_response :success
  end

  test "should update patient" do
    patch patient_url(@patient), params: { patient: { aadhar_number: @patient.aadhar_number, aadhar_otp: @patient.aadhar_otp, aadhar_phone_number: @patient.aadhar_phone_number, aadhar_phone_verified: @patient.aadhar_phone_verified, abha_consent: @patient.abha_consent, abha_id: @patient.abha_id, abha_number: @patient.abha_number, abha_otp: @patient.abha_otp, abha_phone_number: @patient.abha_phone_number, abha_phone_verified: @patient.abha_phone_verified, abha_verified: @patient.abha_verified, email: @patient.email, first_name: @patient.first_name, last_name: @patient.last_name, phone_number: @patient.phone_number } }
    assert_redirected_to patient_url(@patient)
  end

  test "should destroy patient" do
    assert_difference("Patient.count", -1) do
      delete patient_url(@patient)
    end

    assert_redirected_to patients_url
  end
end
