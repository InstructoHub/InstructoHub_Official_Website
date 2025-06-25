import React, { useState, useEffect } from 'react';
import { Copy, Trash2, ArrowUp, Loader2, Crown } from 'lucide-react';
import Header from './Header';

export default function TenantsManagement() {
    const [tenants, setTenants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTenants();
    }, []);

    const fetchTenants = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://admin.mdl.instructohub.com/instructohub/tenant_data_api.php');
            const data = await response.json();

            if (data.success) {
                setTenants(data.data);
            } else {
                setError(data.error || 'Failed to fetch tenants');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    const handleUniversalUpgrade = async () => {
        window.location.href = `https://admin.mdl.instructohub.com/instructohub/upgrade.php`;
    };

    const handleCopyDatabase = (tenant) => {
        window.location.href = `https://${tenant.tenantName}.mdl.instructohub.com/instructohub/copydb.php`;
    };

    const handleDelete = (tenant) => {
        if (window.confirm(`Are you sure you want to delete tenant: ${tenant.tenantName}?`)) {
            window.location.href = `https://${tenant.tenantName}.mdl.instructohub.com/instructohub/delete.php`;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                    <span className="text-gray-600">Loading tenants...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
                    <h2 className="text-red-800 font-semibold mb-2">Error</h2>
                    <p className="text-red-600">{error}</p>
                    <button
                        onClick={fetchTenants}
                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Tenants Management</h1>
                            <p className="text-gray-600 mt-1">Manage all your tenant configurations</p>
                        </div>
                        <button
                            onClick={handleUniversalUpgrade}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                        >
                            <ArrowUp className="h-4 w-4 mr-2" />
                            Upgrade All Tenants
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        S.No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tenant Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tenants.map((tenant, index) => (
                                    <tr key={tenant.sno} className={`hover:bg-gray-50 ${index === 0 ? 'bg-amber-50' : ''}`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {tenant.sno}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-2">
                                                {index === 0 && (
                                                    <Crown className="h-4 w-4 text-amber-500" />
                                                )}
                                                <div>
                                                    <div className={`text-sm font-medium ${index === 0 ? 'text-amber-800' : 'text-gray-900'}`}>
                                                        {tenant.tenantName}
                                                        {index === 0 && (
                                                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                                                                Super Admin
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {tenant.domain}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                            {index !== 0 && (
                                                <button
                                                    onClick={() => handleCopyDatabase(tenant)}
                                                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                                >
                                                    <Copy className="h-3 w-3 mr-1" />
                                                    Copy DB
                                                </button>
                                            )}
                                            {index === 0 && (
                                                <span className="text-xs text-gray-500 italic">
                                                    Protected
                                                </span>
                                            )}
                                            <button
                                                onClick={() => handleDelete(tenant)}
                                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:red-500 transition-colors"
                                            >
                                                <Trash2 className="h-3 w-3 mr-1" />
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {tenants.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No tenants found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}