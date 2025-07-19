-- Insert sample admin user
INSERT INTO users (
  email, 
  password_hash, 
  first_name, 
  last_name, 
  phone, 
  country, 
  city, 
  is_verified, 
  is_premium, 
  role
) VALUES (
  'admin@pinnaclewealthz.com',
  '$2b$10$rQZ8kHp0rQZ8kHp0rQZ8kOp0rQZ8kHp0rQZ8kHp0rQZ8kHp0rQZ8k', -- 'admin123' hashed
  'Admin',
  'User',
  '+1 (555) 000-0001',
  'United States',
  'New York',
  true,
  true,
  'admin'
) ON CONFLICT (email) DO NOTHING;

-- Insert sample regular user
INSERT INTO users (
  email, 
  password_hash, 
  first_name, 
  last_name, 
  phone, 
  country, 
  city, 
  is_verified, 
  is_premium
) VALUES (
  'john.smith@example.com',
  '$2b$10$rQZ8kHp0rQZ8kHp0rQZ8kOp0rQZ8kHp0rQZ8kHp0rQZ8kHp0rQZ8k', -- 'password123' hashed
  'John',
  'Smith',
  '+1 (555) 123-4567',
  'United States',
  'New York',
  true,
  true
) ON CONFLICT (email) DO NOTHING;

-- Get user IDs for profile creation
DO $$
DECLARE
    admin_user_id UUID;
    john_user_id UUID;
BEGIN
    -- Get admin user ID
    SELECT id INTO admin_user_id FROM users WHERE email = 'admin@pinnaclewealthz.com';
    
    -- Get john user ID
    SELECT id INTO john_user_id FROM users WHERE email = 'john.smith@example.com';
    
    -- Insert user profiles
    INSERT INTO user_profiles (
      user_id,
      bio,
      website,
      linkedin,
      twitter,
      risk_tolerance,
      investment_goals,
      profile_completion_percentage
    ) VALUES (
      john_user_id,
      'Experienced investor focused on long-term wealth building and portfolio diversification.',
      'https://johnsmith.com',
      'https://linkedin.com/in/johnsmith',
      '@johnsmith',
      'moderate',
      ARRAY['Retirement', 'Wealth Building', 'Passive Income'],
      85
    ) ON CONFLICT (user_id) DO NOTHING;
    
    -- Insert sample investments for John
    INSERT INTO user_investments (
      user_id,
      plan_name,
      amount,
      return_percentage,
      status
    ) VALUES 
      (john_user_id, 'Professional Plan', 25000.00, 15.00, 'active'),
      (john_user_id, 'Premium Plan', 20000.00, 22.00, 'active'),
      (john_user_id, 'Starter Plan', 5000.00, 18.00, 'completed')
    ON CONFLICT DO NOTHING;
    
    -- Insert sample transactions for John
    INSERT INTO user_transactions (
      user_id,
      type,
      amount,
      status,
      description
    ) VALUES 
      (john_user_id, 'deposit', 25000.00, 'completed', 'Initial investment deposit'),
      (john_user_id, 'profit', 5000.00, 'completed', 'Monthly profit from Professional Plan'),
      (john_user_id, 'deposit', 20000.00, 'completed', 'Additional investment'),
      (john_user_id, 'withdrawal', 2500.00, 'pending', 'Withdrawal request'),
      (john_user_id, 'profit', 1250.50, 'completed', 'Weekly profit distribution')
    ON CONFLICT DO NOTHING;
    
    -- Insert sample activities for John
    INSERT INTO user_activities (
      user_id,
      activity_type,
      description,
      metadata
    ) VALUES 
      (john_user_id, 'investment', 'Invested in Professional Plan', '{"plan": "Professional", "amount": 25000}'),
      (john_user_id, 'profit', 'Monthly profit received', '{"amount": 5000, "plan": "Professional"}'),
      (john_user_id, 'withdrawal', 'Withdrawal request submitted', '{"amount": 2500, "status": "pending"}'),
      (john_user_id, 'profile', 'Profile updated', '{"fields": ["bio", "investment_goals"]}'),
      (john_user_id, 'security', 'Two-factor authentication enabled', '{"method": "app"}')
    ON CONFLICT DO NOTHING;
END $$;
