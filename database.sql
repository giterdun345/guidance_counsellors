CREATE DATABASE guidance;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL,
    UNIQUE(user_name)
);

CREATE TABLE connections(
    connection_id SERIAL PRIMARY KEY, 
    user_id UUID NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    contact_type VARCHAR(25),
    contact_method VARCHAR(25),
    provision VARCHAR(2000),
    connection_date DATE,
    student_id VARCHAR(25),
    purpose VARCHAR(2000),
    gender VARCHAR(1), 
    yearGroup VARCHAR(4), 
    school VARCHAR(25), 
    cp_referral VARCHAR(25),
    referral_discharges VARCHAR(25),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (user_name) REFERENCES users (user_name)
); 

INSERT INTO connections(student_id,  user_name, user_id, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date) VALUES ('22345', 'user2', '98bd9d6e-351d-4856-b4ab-f91d0c30edc8','SENCO', 'yr11', 'John Grey', 'phone call', 'F', 'Late to school', 'Sign in sheet', '08/19/2020'); 



(student_id,  user_name, user_id, contact_type, yearGroup, school, contact_method, gender, purpose, provision, connection_date)
('12345', 'user1', '79a21ace-9f8b-4a2c-bb92-3edee286148b', 'SENCO', 'yr09', 'light house', 'email', 'M', 'Check In', 'Progress report on grades biweekly', '08/19/2020') 
('62345', 'user1', '79a21ace-9f8b-4a2c-bb92-3edee286148b', 'SENCO', 'yr09', 'light house', 'phone call', 'M', 'Report', 'Report progress', '08/27/2020') 
('22345', 'user2', '98bd9d6e-351d-4856-b4ab-f91d0c30edc8','SENCO', 'yr11', 'John Grey', 'phone call', 'F', 'Late to school', 'Sign in sheet', '08/19/2020') 
('32345', 'user1', '79a21ace-9f8b-4a2c-bb92-3edee286148b','SENCO', 'yr05', 'light house', 'email', 'M', 'Check In', 'Progress report on grades biweekly', '08/19/2020') 
('42345', 'user2', '98bd9d6e-351d-4856-b4ab-f91d0c30edc8', 'parent', 'yr07', 'Clifton Hunter', 'phone call', 'F', 'Late to school', 'Sign in sheet', '08/19/2020') 
('52345', 'user2', '98bd9d6e-351d-4856-b4ab-f91d0c30edc8','SENCO', 'yr03', 'Savannah', 'phone call', 'F', 'Late to school', 'Sign in sheet', '08/19/2020') 

