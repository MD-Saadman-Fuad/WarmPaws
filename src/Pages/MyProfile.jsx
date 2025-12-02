import React, { use, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import userPNG from '../assets/user.png';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {
    const { user, updateUser } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentEmail, setCurrentEmail] = useState('');
    const [formData, setFormData] = useState({
        displayName: '',
        photoURL: ''
    });
    const navigate = useNavigate();

    //form data ano
    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                photoURL: user.photoURL || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password', {
            state: { email: currentEmail }
        });
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.displayName.trim()) {
            toast.error('Name is required');
            return;
        }

        setIsUpdating(true);

        try {
            await updateUser({
                displayName: formData.displayName.trim(),
                photoURL: formData.photoURL.trim() || null
            });

            toast.success('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            console.error('Profile update error:', error);
            toast.error('Failed to update profile. Please try again.');
        } finally {
            setIsUpdating(false);
        }
    };

    const cancelEdit = () => {
        // Reset form data to current user data
        setFormData({
            displayName: user?.displayName || '',
            photoURL: user?.photoURL || ''
        });
        setIsEditing(false);
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-600">Please log in to view your profile</h2>
                </div>
            </div>
        );
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return 'Not available';
        return new Date(timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-orange-100 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header Section */}
                <div
                    className="bg-white rounded-lg shadow-md p-6 mb-6"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Profile Image */}
                        <div className="shrink-0">
                            <img
                                className="w-32 h-32 rounded-full object-cover border-4 border-orange-300 shadow-lg"
                                src={user.photoURL || userPNG}
                                alt={user.displayName || "User"}
                                onError={(e) => {
                                    console.log("MyProfile: Image failed to load:", user.photoURL);
                                    e.target.src = userPNG;
                                }}
                                crossOrigin="anonymous"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {user.displayName || 'User'}
                            </h1>
                            <p className="text-gray-600 text-lg mb-4">{user.email}</p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                                    {user.emailVerified ? '✓ Verified' : '⚠ Not Verified'}
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    Pet Owner
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Information */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Account Information */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Account Information
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                                <p className="text-gray-800 font-semibold">{user.displayName || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                                <p className="text-gray-800 font-semibold">{user.email}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">User ID</label>
                                <p className="text-gray-800 font-mono text-sm">{user.uid}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Account Created</label>
                                <p className="text-gray-800">{formatDate(user.metadata?.creationTime)}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Last Sign In</label>
                                <p className="text-gray-800">{formatDate(user.metadata?.lastSignInTime)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Account Settings */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            Account Settings
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Email Verification</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.emailVerified ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {user.emailVerified ? 'Verified' : 'Not Verified'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Provider</span>
                                <span className="text-gray-600 capitalize">
                                    {user.providerData?.[0]?.providerId?.replace('.com', '') || 'Email/Password'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Two-Factor Auth</span>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    Not Set
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 space-y-3">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Edit Profile
                            </button>
                            <button onClick={handleForgotPassword} className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors">
                                Change Password
                            </button>
                            {!user.emailVerified && (
                                <button className="w-full border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                                    Verify Email
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Update Form Modal */}
                {isEditing && (
                    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Update Profile
                        </h2>
                        <form onSubmit={handleUpdateProfile}>
                            <div className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="displayName"
                                        value={formData.displayName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                {/* Photo URL Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        Profile Photo URL
                                    </label>
                                    <input
                                        type="url"
                                        name="photoURL"
                                        value={formData.photoURL}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Enter photo URL (optional)"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Leave empty to use default avatar
                                    </p>
                                </div>

                                {/* Preview Section */}
                                {formData.photoURL && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-2">
                                            Photo Preview
                                        </label>
                                        <img
                                            src={formData.photoURL}
                                            alt="Preview"
                                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                                            onError={(e) => {
                                                console.log("Preview image failed to load:", formData.photoURL);
                                                e.target.style.display = 'none';
                                            }}
                                            crossOrigin="anonymous"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isUpdating}
                                        className={`flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isUpdating ? 'Updating...' : 'Update Profile'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={cancelEdit}
                                        disabled={isUpdating}
                                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                {/* Activity Summary */}
                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Activity Summary
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600">0</div>
                            <div className="text-gray-600">Services Booked</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">0</div>
                            <div className="text-gray-600">Reviews Given</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">Member</div>
                            <div className="text-gray-600">Status</div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    duration: 4000,
                    success: {
                        style: {
                            background: '#10b981',
                            color: '#fff',
                        },
                    },
                    error: {
                        style: {
                            background: '#ef4444',
                            color: '#fff',
                        },
                    },
                }}
            />
        </div>
    );
};

export default MyProfile;