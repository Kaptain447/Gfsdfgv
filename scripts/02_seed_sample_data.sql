-- Insert sample admin user
INSERT INTO users (
    email, 
    password_hash, 
    first_name, 
    last_name, 
    role, 
    is_verified, 
    is_premium,
    country,
    city
) VALUES (
    'admin@pinnaclewealthz.com',
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: admin123
    'Admin',
    'User',
    'admin',
    true,
    true,
    'United States',
    'New York'
) ON CONFLICT (email) DO NOTHING;

-- Insert sample regular user
INSERT INTO users (
    email, 
    password_hash, 
    first_name, 
    last_name, 
    role, 
    is_verified, 
    is_premium,
    phone,
    country,
    city
) VALUES (
    'john.doe@example.com',
    '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: password123
    'John',
    'Doe',
    'user',
    true,
    false,
    '+1-555-0123',
    'United States',
    'Los Angeles'
) ON CONFLICT (email) DO NOTHING;

-- Get user IDs for sample data
DO $$
DECLARE
    admin_id UUID;
    user_id UUID;
BEGIN
    -- Get admin user ID
    SELECT id INTO admin_id FROM users WHERE email = 'admin@pinnaclewealthz.com';
    
    -- Get regular user ID
    SELECT id INTO user_id FROM users WHERE email = 'john.doe@example.com';
    
    -- Insert user profiles
    INSERT INTO user_profiles (
        user_id,
        bio,
        risk_tolerance,
        investment_goals,
        profile_completion_percentage
    ) VALUES 
    (admin_id, 'System Administrator', 'moderate', ARRAY['growth', 'income'], 100),
    (user_id, 'Experienced investor looking for growth opportunities', 'aggressive', ARRAY['growth', 'diversification'], 85)
    ON CONFLICT DO NOTHING;
    
    -- Insert sample investments
    INSERT INTO user_investments (
        user_id,
        plan_name,
        amount,
        return_percentage,
        status,
        start_date
    ) VALUES 
    (user_id, 'Premium Growth Plan', 10000.00, 12.5, 'active', NOW() - INTERVAL '30 days'),
    (user_id, 'Balanced Portfolio', 5000.00, 8.0, 'active', NOW() - INTERVAL '60 days'),
    (admin_id, 'Executive Plan', 50000.00, 15.0, 'active', NOW() - INTERVAL '90 days')
    ON CONFLICT DO NOTHING;
    
    -- Insert sample transactions
    INSERT INTO user_transactions (
        user_id,
        type,
        amount,
        status,
        description,
        reference_id
    ) VALUES 
    (user_id, 'deposit', 10000.00, 'completed', 'Initial investment deposit', 'TXN-001'),
    (user_id, 'profit', 125.00, 'completed', 'Monthly profit from Premium Growth Plan', 'TXN-002'),
    (user_id, 'deposit', 5000.00, 'completed', 'Additional investment', 'TXN-003'),
    (admin_id, 'deposit', 50000.00, 'completed', 'Executive plan investment', 'TXN-004'),
    (admin_id, 'profit', 625.00, 'completed', 'Monthly profit from Executive Plan', 'TXN-005')
    ON CONFLICT DO NOTHING;
    
    -- Insert sample activities
    INSERT INTO user_activities (
        user_id,
        activity_type,
        description,
        metadata
    ) VALUES 
    (user_id, 'registration', 'Account created successfully', '{"registration_method": "email"}'),
    (user_id, 'login', 'User logged in', '{"login_method": "email"}'),
    (user_id, 'investment', 'Started Premium Growth Plan', '{"plan": "Premium Growth Plan", "amount": 10000}'),
    (user_id, 'profile_update', 'Updated investment goals', '{"field": "investment_goals"}'),
    (admin_id, 'registration', 'Admin account created', '{"registration_method": "system"}'),
    (admin_id, 'login', 'Admin logged in', '{"login_method": "email"}')
    ON CONFLICT DO NOTHING;
    
END $$;
